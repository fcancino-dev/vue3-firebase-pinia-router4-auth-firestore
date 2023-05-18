import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendEmailVerification} from 'firebase/auth';
import { auth } from '../firebaseConfig';
import router from '../router';

//PINIA 
export const useUserStore = defineStore('user',{
    state : () => ({
        userData : ref(null),
        loading : ref(false),
        loadingSession: ref(false),
        
    }),
    actions: {
        // REGISTER SIN VERIFICACION DE EMAIL.
        async registerUser(email, password) {
            this.loading = true;
            try {
                const {user} = await createUserWithEmailAndPassword(auth, email, password); 
                this.userData = {email: user.email, uid: user.uid, displayName: user.displayName};
                router.push('/');
                console.log('Usuario registrado');
            } 
            catch (error) {
                console.log(error);
            }
            finally {
                this.loading = false;
            }
        },

        // REGISTER CON VERIFICACION DE EMAIL.
        // async registerUser(email, password) {
        //     this.loading = true;
        //     try {
        //         await createUserWithEmailAndPassword(auth, email, password);
        //         await sendEmailVerification(auth.currentUser);
        //         router.push('/login');
        //     }
        //     catch (error) {
        //         console.log(error);
        //     }
        //     finally {
        //         this.loading = false;
        //     }
        // },

        async loginUser(email, password) {
            this.loading = true;
            try {
                const {user} = await signInWithEmailAndPassword(auth, email, password); 
                this.userData = {email: user.email, uid: user.uid, displayName: user.displayName};
                router.push('/');
                console.log('Sesión iniciada');
            } 
            catch (error) {
                console.log(error);
            }
            finally {
                this.loading = false;
            }
        },

        async signOutUser(){
            this.loading = true;
            try {
                await signOut(auth);
                this.userData = null;
                router.push('/login');
                console.log('Sesión cerrada');
            }
            catch (error) {
                console.log(error);
            }
            finally {
                this.loading = false;
            }
        },

        currentUser() {
            return new Promise((resolve, reject) => {
                const unsubscribe = onAuthStateChanged(auth, user => {
                    if (user) {
                        this.userData = {
                            email: user.email, 
                            uid: user.uid, 
                            displayName: user.displayName
                        };                  
                    }
                    else {
                        this.userData = null;
                    }
                    resolve(user);

                }, 
                (e) => reject(e));  

                unsubscribe();
            })
        },
    },
});






//PINIA + COMPOSITION API
// export const useUserStore = defineStore ('user',() => {
//     const userData = ref('FrDavid')

//     const userMayuscula = computed(() => 
//         userData.value.toUpperCase())

//     const registerUser = (newUser) => {
//         userData.value = newUser;
//         console.log(userData.value)
//     }

//     return { 
//         userData,
//         userMayuscula,
//         registerUser,
//     }
// })

//COMPOSITION API
// export function useUserStore()  {
//     const userData = ref('frdavid')

//     const userMayuscula = computed(() => 
//         userData.value.toUpperCase())

//     const registerUser = (newUser) => {
//         userData.value = newUser;
//         console.log(userData.value)
//     }
//     // const login = (newUser) => {
//     //     userData.value = newUser;
//     // } 

//     return { 
//         userData,
//         userMayuscula,
//         registerUser, 
//         // login
//     }
// }