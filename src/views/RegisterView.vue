<script setup>
import { useUserStore } from '../stores/user';
// import { storeToRefs } from 'pinia';
import { ref } from 'vue';
// import { useRouter } from 'vue-router';

// const {registerUser} = userStore;
// const {userData} = storeToRefs(userStore);


const userStore = useUserStore();
// const router = useRouter();

const email = ref('');
const password = ref('');

const handleSubmit = async() => {
    if (!email.value || password.value.length < 6) {
        return alert('campo vacio');
    }
    // try {
    //     await userStore.registerUser(email.value, password.value);
    //     alert("Verifica email")
    // } catch (error) {
    //     console.log(error);
    // }

    userStore.registerUser(email,value, password.value);
}


</script>

<template>
<div class=" container mx-auto">
    <div>Register</div>
    <div v-if="userStore.loading" class=" text-center pb-2">
            <p>Cargando informacion...</p>
    </div>
    <form @submit.prevent="handleSubmit">
        <input type="email" placeholder="Ingrese su email" autocomplete="email" v-model.trim="email"/>
        <input type="password" placeholder="Ingrese su contraseña" autocomplete="current-password" v-model.trim="password"/>
        <button class="bg-blue-500 text-white rounded-md px-2 py-1" type="submit" :disabled="userStore.loading" > Crear usuario </button>
        
    </form>

    <!-- <div>{{ userData }}</div>
       <el-button type="primary" @click="onRegister">
            Registrar
       </el-button> -->
</div>
</template>
