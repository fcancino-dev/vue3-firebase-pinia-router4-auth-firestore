<script setup>
import { useUserStore } from '../stores/user';
import { ref } from 'vue';
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';
import { ElMessage } from 'element-plus'

const userStore = useUserStore();

const loadingButton = ref(false);
const formRef = ref(null);
const formModel = ref({
    email: '',
    password: ''
});

const rules = {
    email: [
        { required: true, message: 'Por favor ingrese su email', trigger: 'blur' },
        { type: 'email', message: 'Por favor ingrese un email válido', trigger: 'blur' },
    ],
    password: [
        { required: true, message: 'Por favor ingrese su contraseña', trigger: 'blur' },
        { min: 6, message: 'La contraseña debe tener al menos 6 caracteres', trigger: 'blur' },
    ],
}

const submitForm = async () => {
    const valid = await formRef.value.validate()
    if (valid) {
        try {
            loadingButton.value = true // Activar carga
            const error = await userStore.loginUser(formModel.value.email, formModel.value.password);
            
            if (!error) {
                ElMessage({
                    message: 'Inicio exitoso.',
                    type: 'success',
                })
                return
            }

            switch (error) {
                case 'auth/user-not-found': 
                    ElMessage.error('Usuario no encontrado.')               
                    break;
                case 'auth/wrong-password':
                    ElMessage.error('Contraseña incorrecta.')
                    break;
            
                default:
                    alert('Error en el inicio de sesion')
                    break;
            }
            console.log('submit!');
        }
        catch (error) {
            console.log('Error en el inicio de sesion') 
        }
        finally {
            loadingButton.value = false // Desactivar carga
        }
    }
    else {
        console.log('Formulario no válido');
    }
};

//FORMULARIO SIN LOADING DE CARGA
// const submitForm = () => {
//   formRef.value.validate((valid) => {
//     if (valid) {
//       userStore.loginUser(formModel.value.email, formModel.value.password);
//       console.log('submit!');
//     } else {
//       console.log('Formulario no válido');
//     }
//   });
// };

//FORMULARIO ANTIGUO SIN VALIDACION DE PARTE DEL FRONT
// const handleSubmit = async () => {
//     if (!email.value || password.value.length < 6) {
//         return alert('campo vacio');
//     }
//     try {
//         await userStore.loginUser(email.value, password.value);
//         console.log.("submit")
//     } catch (error) {
//         console.log(error);
//     }
// }
</script>

<template>
    <div class=" container mx-auto">
        <!-- <div v-if="userStore.loadingUser   " class=" text-center pb-2">
            <p>Cargando informacion...</p>
        </div> -->
        <div class="flex flex-col">
            <div class="flex justify-center text-4xl font-bold">Login</div>
            <el-card class="box-card">
                <el-form ref="formRef" :model="formModel" :rules="rules" class="demo-dymanic" label-width="100px" label-position="top">
                    <el-form-item prop="email" label="Email" >
                        <el-input v-model="formModel.email" type="email" placeholder="Ingrese su email" />
                    </el-form-item>
                    <el-form-item prop="password" label="Contraseña">
                        <el-input v-model="formModel.password" type="password" show-password
                            placeholder="Ingrese su contraseña">
                        </el-input>
                    </el-form-item>
                    <el-button type="primary" @click.prevent="submitForm" :loading="loadingButton" >Acceder</el-button>
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