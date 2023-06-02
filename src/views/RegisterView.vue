<script setup>
import { useUserStore } from '../stores/user';
import { ref, reactive } from 'vue';
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';
import { ElMessage, ElMessageBox } from 'element-plus';


const userStore = useUserStore();

// const email = ref('');
// const password = ref('');
const loadingButton = ref(false)
const formRef = ref(null);
const formModel = reactive({
    email: '',
    password: '',
    repassword: '',
});

const validatePass = (_rule, value, callback) => {
    if(value === ''){
        callback(new Error('Por favor repita su contraseña'))
    }
    else if (value != formModel.password) {
        callback(new Error("¡Las contraseñas no coinciden!"))
    }
    else {
        callback();
    }
}

// const emailRules = [
//     { required: true, message: 'Por favor ingrese su email', trigger: 'blur' },
//     { type: 'email', message: 'Por favor ingrese un email válido', trigger: 'blur' },
// ];
// const passwordRules = [
//     { required: true, validator: validatePass, trigger: 'blur' },
//     { min: 6, message: 'La contraseña debe tener al menos 6 caracteres', trigger: 'blur' },
// ]
// const repasswordRules = [
//     { required: true, validator: validatePass2,  trigger: 'blur' },
//     { min: 6, trigger: 'blur' },
// ]
const rules = {

    email: [
        { required: true, message: 'Por favor ingrese su email', trigger: 'blur' },
        { type: 'email', message: 'Por favor ingrese un email válido', trigger: 'blur' },
    ],
    password: [
        { required: true, message: 'Por favor ingrese su contraseña', trigger: 'blur' },
        { min: 6, message: 'La contraseña debe tener al menos 6 caracteres', trigger: 'blur' },
    ],
    repassword: [
        { required: true, validator: validatePass,  trigger: 'blur' },
        { min: 6, message: 'La contraseña debe tener al menos 6 caracteres', trigger: 'blur' },
    ]
}
    

const submitForm = async () => {
    const valid = await formRef.value.validate()
    if (valid) {
        try {
            loadingButton.value = true // Activar carga
            const error = await userStore.registerUser(formModel.email, formModel.password);
            if (!error) {
                ElMessage({
                    message: 'Confirma la verficacion de usuario en tu correo.',
                    type: 'success',
                })
                return
            }

            switch (error) {
                case 'auth/email-already-in-use': 
                    ElMessage.error('Email ya en uso.')               
                    break;
                default:
                    ElMessage.error('Error en el registro.')
                    break;
            }
            console.log('submit!');
        }
        catch (error) {
            console.log('Error en el Registro de Usuario')
        }
        finally {
            loadingButton.value = false // Desactivar carga
        }
    }
    else {
        console.log('Formulario no válido');
    }
};

// FORMULARIO SIN LOADING DE CARGA
// const submitForm = () => {
//     formRef.value.validate((valid) => {
//         if (valid) {
//             userStore.registerUser(formModel.value.email, formModel.value.password);
//             console.log('submit!');
//         } else {
//             console.log('Formulario no válido');
//         }
//     });
// };

//FORMULARIO ANTIGUO SIN VALIDACION DE PARTE DEL FRONT
// const handleSubmit = async () => {
//     if (!email.value || password.value.length < 6) {
//         return alert('campo vacio');
//     }
//     try {
//         await userStore.registerUser(email.value, password.value);
//         alert("Verifica email")
//     } catch (error) {
//         console.log(error);
//     }
// }
</script>

<template>
    <div class=" container mx-auto">
        <!-- <div v-if="userStore.loadingUser" class=" text-center pb-2">
            <p>Cargando informacion...</p>
        </div> -->
        <div class="flex flex-col">
            <div class="flex justify-center text-4xl font-bold">Register</div>
            <el-card class="box-card ">
                <el-form ref="formRef" :model="formModel" :rules="rules" class="demo-dynamic" label-width="100px" label-position="top">
                    <el-form-item prop="email" label="Email" >
                        <el-input v-model="formModel.email" type="email" placeholder="Ingrese su email"></el-input>
                    </el-form-item>
                    <el-form-item prop="password" label="Contraseña" >
                        <el-input v-model="formModel.password" type="password" show-password
                            placeholder="Ingrese su contraseña">
                        </el-input>
                    </el-form-item>
                    <el-form-item  prop="repassword" label="Confirmar contraseña" >
                        <el-input v-model="formModel.repassword" type="password" show-password
                        placeholder="Repita contraseña"/>
                    </el-form-item>
                    <!-- <el-form-item> -->
                    <el-button type="primary" @click.prevent="submitForm" :loading="loadingButton">Crear Usuario</el-button>
                    <!-- </el-form-item> -->
                </el-form>
            </el-card>
        </div>
    </div>
</template>

<style scoped>
.box-card {
    width: 600px;
    margin: 20px auto;
}
</style>
