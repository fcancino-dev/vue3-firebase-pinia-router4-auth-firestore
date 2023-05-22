<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useDatabaseStore } from '../stores/database';

const route = useRoute();
// console.log(route.params.id);
const handleSubmit = () => {
    // validaciones de esa input...
    databaseStore.updateUrl(route.params.id, url.value);
    alert('Url editada');
    console.log("url editada");
}

const databaseStore = useDatabaseStore();

const url = ref('');

onMounted( async() => {
    url.value = await databaseStore.leerUrl(route.params.id);
    console.log(url.value);
})

</script>

<template>
    <div>
        <h1>Editar id: </h1>
        <form @submit.prevent="handleSubmit" class=" pb-2">
            <input type="text" placeholder="Ingrese URL" v-model="url">
            <button class="bg-blue-500 text-white rounded-md px-2 py-1" type="submit">Editar</button>
            <!-- <el-button type="success">Agregar</el-button> -->
        </form>
    </div>
</template>