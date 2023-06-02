<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useDatabaseStore } from '../stores/database';
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';
import { ElMessage } from 'element-plus'
import { Back } from '@element-plus/icons-vue';

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
        <div class=" flex items-center  mb-4">
            <router-link to="/" class=" flex items-center  space-x-2">
                <el-icon><Back /></el-icon>
                <span class="text-lg font-medium">Editar URL </span>
            </router-link>
        </div>
        <el-form class=" pb-2">
            <el-form-item>
                <div class="w-80">
                    <el-input type="text" placeholder="Ingrese URL" v-model="url"/>
                </div>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleSubmit">Editar</el-button>
            </el-form-item>
            <!-- <button class="bg-blue-500 text-white rounded-md px-2 py-1" type="submit">Editar</button>
            <el-button type="success" @click="handleSubmit">Editar</el-button> -->
        </el-form>
        
    </div>
</template>