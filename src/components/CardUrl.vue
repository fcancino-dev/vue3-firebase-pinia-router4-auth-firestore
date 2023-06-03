<script setup>
import { useDatabaseStore } from '../stores/database';
import { Delete, Edit, InfoFilled } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
import { ElMessage, ElCard } from 'element-plus'
import { ref } from 'vue';

const router = useRouter();
const databaseStore = useDatabaseStore();
const loading = ref(true);

databaseStore.getUrls();

const confirmEvent = (item) => {
    databaseStore.deleteUrl(item)
    ElMessage({
        type: 'success',
        message: 'Eliminado',
    })
}
const cancelEvent = () => {
    ElMessage({
        type: 'info',
        message: 'Cancelado',
    })
}

</script>

<template>
    <div v-if="databaseStore.loadingDoc" class=" with-max py-6 flex item-center">
        <span class="flex justify-items-center" v-loading="loading" />
    </div>
    <div v-else>
        <template v-if="databaseStore.documents.length === 0">
            <el-empty description="No hay documentos" />
        </template>
        <div v-for="item of databaseStore.documents" :key="item.id" class="pb-2">
            <el-card class="box-card">
                <div class="flex ml-[498px] items-center">
                    <el-popconfirm width="200" confirm-button-text="Si" cancel-button-text="No" :icon="InfoFilled"
                        icon-color="#626AEF" title="Estas seguro que deseas eliminar?" @confirm="confirmEvent(item.id)"
                        @cancel="cancelEvent">
                        <template #reference>
                            <el-button type="danger" circle size="small" :icon="Delete" />
                        </template>
                    </el-popconfirm>
                    <el-button type="primary" circle size="small" @click="router.push(`/editarurl/${item.id}`)"
                        :icon="Edit" />
                </div>
                <div class="">
                    URL: {{ item.name }}
                    <br>
                    SHORT: {{ item.short }}
                </div>
            </el-card>
        </div>
    </div>
</template>

<style scoped>
.box-card {
    width: 600px;
    /* margin: 30px auto; */
}

.with-max {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
}
</style>