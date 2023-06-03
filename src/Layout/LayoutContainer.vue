<script setup>
import { RouterView, RouterLink } from 'vue-router';
import NavBar from '../components/NavBar.vue';
import FooterView from '../components/FooterView.vue';

</script>

<template>
    <div class="common-layout">
      <el-container>
        <el-header class=" bg-black" height="56px">
            <NavBar />
        </el-header>
        <el-main >
            <RouterView />
        </el-main>
        <el-footer height="25px" class=" bg-blue-600 ">
            <FooterView/>
        </el-footer>
        <div class="text-center text-white text-sm bg-black py-2">
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

  <style>

  .common-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  </style>