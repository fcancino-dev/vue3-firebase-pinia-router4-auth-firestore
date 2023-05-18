<script setup>
import { RouterView, RouterLink } from 'vue-router';
import NavBar from '../components/NavBar.vue';
import FooterView from '../components/FooterView.vue';

</script>

<template>
    <div class="common-layout">
      <el-container>
        <el-header class=" bg-blue-300">
            <NavBar />
        </el-header>
        <el-main>
            <RouterView />
        </el-main>
        <el-footer height="25px" class=" bg-gray-800">
            <FooterView/>
        </el-footer>
        <div class="text-center text-gray-500 text-sm">
                <span>© 2023</span>
                <span class="mx-1">·</span>
                <span>Vue 3</span>
                <span class="mx-1">·</span>
                <span>Element Plus</span>
                <span class="mx-1">·</span>
                <span>Vue Router</span>
                <span class="mx-1">·</span>
                <span>Vite</span>
                <span class="mx-1">·</span>
                <span>Tailwindcss</span>
            </div>
      </el-container>
    </div>
    
  
  </template>