<script setup>
import { useUserStore } from '../stores/user';
import { computed } from 'vue';
// import { storeToRefs } from 'pinia';

const userStore = useUserStore();
// const {userData} = storeToRefs(userStore);
const data = computed(() => userStore.userData);


</script>

<template>
    <main  class=" container mx-auto">
        <div class=" text-2xl pb-2">Home</div>
        <!-- <div v-if="userStore.loading" class=" text-center pb-2">
            <p>Cargando informacion...</p>
        </div> -->
        <div v-if="data">
            <p >Nombre: <span class=" ">{{ data.displayname }}</span></p>
            <p>Email: <span class=" ">{{ data.email }}</span></p>
            <p>Uid: <span class=" ">{{ data.uid }}</span></p>
        </div>










        <!-- !!!Hola {{ userData }} -->
    </main>
</template>