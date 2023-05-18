<script setup>
import { useUserStore } from '../stores/user';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
// import { useRouter } from 'vue-router';

// const userStore = useUserStore();

// const { userData} = storeToRefs(userStore);
// const { userMayuscula, login } = userStore;

const userStore = useUserStore();
// const router = useRouter();

const email = ref('');
const password = ref('');

const handleSubmit = () => {
    if (!email.value || password.value.length < 6) {
        return alert('campo vacio');
        
    }
    userStore.loginUser(email.value, password.value);
}


</script>

<template>
    <div  class=" container mx-auto">
        <div>login</div>
        <div v-if="userStore.loading" class=" text-center pb-2">
            <p>Cargando informacion...</p>
        </div>
        <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="Ingrese su email" autocomplete="email" v-model.trim="email"/>
            <input type="password" placeholder="Ingrese su contraseña" autocomplete="current-password" v-model.trim="password"/>
            <button class="bg-blue-500 text-white rounded-md px-2 py-1" type="submit" :disabled="userStore.loading"> Acceder </button>
        </form>













        <!-- <div>{{ userData }}</div>
        <div>{{ userMayuscula }}</div> -->
    </div>
</template>