<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useUserStore } from '../stores/user';

const userStore = useUserStore();

</script>

<template>
    <nav class=" " >
        <div class=" flex justify-between container mx-auto py-2">
            <RouterLink to="/" >
                <img 
                    class="logo" 
                    src="../assets/vue.svg" 
                    alt="Vue logo" 
                />
            </RouterLink>
            <div class=" flex  items-center" v-if="!userStore.loadingSession" >
                <el-button text :class="{ hidden: !userStore.userData }">
                    <RouterLink 
                        to="/"
                        class="text-black"
                        active-class="active"
                        :class=" { 'border-b-2 border-blue-600': $route.path === '/' }"
                    >
                        Home
                    </RouterLink>
                </el-button>
                <el-button text :class="{ hidden: userStore.userData }">
                    <RouterLink 
                        to="/login"
                        class=" text-black"
                        active-class="active"
                        :class=" { 'border-b-2 border-blue-600': $route.path === '/login' }"
                    >
                        Login
                    </RouterLink>
                </el-button>
                <el-button text :class="{ hidden: userStore.userData }">
                    <RouterLink 
                        to="/register"
                        class=" text-black"
                        active-class="active"
                        :class=" { 'border-b-2 border-blue-600': $route.path === '/register' }"
                    >
                        Register
                    </RouterLink>
                </el-button>
                <el-button 
                    type="success" 
                    @click="userStore.signOutUser"
                    :class="{ hidden: !userStore.userData }"
                >
                    Logut
                </el-button>
            </div>
            <div v-else>
                <p>...</p>
            </div>
        </div>
    </nav>
    
        
    
</template>

<style scoped>

.hidden {
    display: none;
}

</style>