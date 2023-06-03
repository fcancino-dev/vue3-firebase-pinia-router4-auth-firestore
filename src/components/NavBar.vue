<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from '../stores/user';
import { UserFilled } from '@element-plus/icons-vue'

const userStore = useUserStore();

</script>

<template>
    <nav class=" bg-black" >
        <div class=" flex justify-between  py-2">
            <RouterLink to="/" >
                <img 
                    class="logo" 
                    src="../assets/vue.svg" 
                    alt="Vue logo" 
                />
            </RouterLink>
            <div class=" flex items-center" v-if="!userStore.loadingSession" >
                <el-button :class="{ hidden: !userStore.userData }">
                    <RouterLink 
                        to="/"
                        class=" text-black"
                        active-class="active"
                        exact-active-class="active-button"
                    >
                        Home
                    </RouterLink>
                </el-button>
                <el-button  :class="{ hidden: !userStore.userData }">
                    <RouterLink 
                        to="/about"
                        class="text-black"
                        active-class="active"
                        exact-active-class="active-button"
                    >
                        About
                    </RouterLink>
                </el-button>
                <el-button :class="{ hidden: userStore.userData }">
                    <RouterLink 
                        to="/login"
                        class=" text-black"
                        active-class="active"
                        exact-active-class="active-button"
                    >
                        Login
                    </RouterLink>
                </el-button>
                <el-button :class="{ hidden: userStore.userData }">
                    <RouterLink 
                        to="/register"
                        class=" text-black"
                        active-class="active"
                        
                        exact-active-class="active-button"
                    >
                        Register
                    </RouterLink>
                </el-button>
                <el-dropdown split-button 
                    type="primary" 
                    class=" pl-3"
                    
                    :class="{ hidden: !userStore.userData }"
                >
                    <el-icon><UserFilled /></el-icon>
                    <!-- <el-button 
                        type="success" 
                        @click="userStore.signOutUser"
                        :class="{ hidden: !userStore.userData }"
                    >
                        Logut
                    </el-button> -->
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item> <RouterLink to="/perfil" >Perfil</RouterLink></el-dropdown-item>
                            <el-dropdown-item @click="userStore.signOutUser" >Cerrar Sesion</el-dropdown-item>
                            <!-- <el-dropdown-item>item 1</el-dropdown-item> -->
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
            <div v-else>
                <p>...</p>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.active-button {
    border-bottom: 2px solid #409EFF;
}

.hidden {
    display: none;
}
.logo {
  height: 2.5em;
  /* padding: 1.5em; */
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #ffffff);
}
</style>