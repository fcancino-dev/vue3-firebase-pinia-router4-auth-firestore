<script setup>
import { reactive, ref } from 'vue';
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';
import { useDatabaseStore } from '../stores/database';
import { ElMessage, ElNotification } from 'element-plus'

const databaseStore = useDatabaseStore();
const formRef = ref(null);
const formModel = reactive({
    url: ''
});

const rules = {
    url: [
        { required: true, pattern: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/, 
            message: 'Por favor ingrese una URL valida', trigger: 'blur' },
    ],
}

const submitForm = async() => {
    const error = await databaseStore.addUrl(formModel.url);
    if (!error) {
        formModel.url = '';
        return  ElNotification({title: 'Agregado',
                                message: 'URL agregada exitosamente.',
                                type: 'success',
  })
    }
    switch (error) {
        default:
            ElMessage({message: 'Error al agregar URL.',
                            type: 'error'})
            break;
    }

} 

</script>

<template>
    <el-form ref="formRef" :model="formModel" :rules="rules" :inline="true" class=" " label-position="top">
        <el-form-item  prop="url" class=" flex flex-row">
            <div class="flex space-x-1">
                <div class="">
                    <el-input v-model="formModel.url" clearable placeholder="Ingrese URL" />
                </div>
                <div>
                    <el-button type="primary" @click.prevent="submitForm" >Agregar</el-button>
                </div>
            </div>
        </el-form-item>
    </el-form>
</template>
