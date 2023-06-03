<script setup>
import { useDatabaseStore } from '../stores/database';
import { useRouter } from 'vue-router';
import AddUrlsForm from '../components/AddUrlsForm.vue';
import CardUrl from '../components/CardUrl.vue';

// const userStore = useUserStore();

// const displayName = computed(() => {
//   if (userStore.userData && userStore.userData.displayName) {
//     return userStore.userData.displayName;
//   }
//   return '----'; // O cualquier valor por defecto que desees utilizar
// });
// const email = computed(() => userStore.userData.email);
// const uid = computed(() => userStore.userData.uid);

// onMounted(() => {
//   if (!userStore.userData) {
//     router.push('/login'); // Redireccionar a la página de inicio de sesión si el usuario no está autenticado
//   }
// });

</script>

<template>
    <div class=" container mx-auto">
        <div class="text-4xl font-bold pb-6">Welcome</div>
        <!-- <div class=" text-4xl pb-2 font-bold">Hello, {{ displayName  }}</div> -->
        <div>
            <!-- <p>Usuario: <span class=" italic font-semibold">{{ displayName }}</span></p> -->
            <!-- <p>Email: <span class=" italic font-semibold">{{ email }}</span></p> -->
            <!-- <p>Uid: <span class=" italic font-semibold">{{ uid }}</span></p> -->
            <!-- <el-button type="primary" @click="router.push(`/editardisplayname/${displayName}`)" :icon="Edit"/> -->
        </div>
        <br>
        <div class="">
            <div class="text-xl ">Documentos(URLs)</div>
            <AddUrlsForm />
        </div>
        <CardUrl />
    </div>
</template>

<style scoped>
.box-card {
    width: 600px;
    /* margin: 30px auto; */
}
</style>