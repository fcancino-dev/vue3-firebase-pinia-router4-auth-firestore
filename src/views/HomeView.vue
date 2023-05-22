<script setup>
import { useUserStore } from '../stores/user';
import { computed } from 'vue';
import { useDatabaseStore } from '../stores/database';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const databaseStore = useDatabaseStore();
// const {userData} = storeToRefs(userStore);
const data = computed(() => userStore.userData);

databaseStore.getUrls();

const url = ref('');
const handleSubmit = () => {
    // validaciones de esa url...
    databaseStore.addUrl(url.value);
    // alert('Url agregada');
}

const router = useRouter();

</script>

<template>
    <main  class=" container mx-auto">
        <div class=" text-2xl pb-2">Home</div>
        <!-- <div v-if="userStore.loading" class=" text-center pb-2">
            <p>Cargando informacion...</p>
        </div> -->
        <form @submit.prevent="handleSubmit" class=" pb-2">
            <input type="text" placeholder="Ingrese URL" v-model="url">
            <button class="bg-blue-500 text-white rounded-md px-2 py-1" type="submit">Agregar</button>
            <!-- <el-button type="success">Agregar</el-button> -->
        </form>
        
        <div v-if="data">
            <p >Nombre de Usuario: <span class=" ">{{ data.displayname }}</span></p>
            <p>Email: <span class=" italic">{{ data.email }}</span></p>
            <p>Uid: <span class=" italic">{{ data.uid }}</span></p>
        </div>
        <br>
        <div class="text-xl">Documentos</div>
        <p v-if="databaseStore.loadingDoc">Loading...</p>
        <ul v-else >
            <li v-for="item of databaseStore.documents" :key="item.id" class="pb-2">
                Id Document: {{ item.id }}
                <br> 
                Name: {{ item.name }} 
                <br> 
                Short: {{ item.short }}
                <br>
                <button 
                    class="bg-red-500 text-white rounded-md px-2 py-1 mr-2" 
                    @click="databaseStore.deleteUrl(item.id)"
                >
                    Eliminar
                </button>
                <button 
                    class="bg-red-500 text-white rounded-md px-2 py-1" 
                    @click="router.push(`/editar/${item.id}`)"
                >
                    Editar
                </button>
            </li>
            
        </ul>
 









        <!-- !!!Hola {{ userData }} -->
    </main>
</template>