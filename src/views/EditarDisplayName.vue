<script setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user';
import { ref } from 'vue';
  
    const userStore = useUserStore();
    const newName = ref('');
    const router = useRouter();
  
    const updateProfile = () => {
        userStore.updateProfileUser(newName.value);
        console.log(newName);
        router.push('/');
    };
  
    
</script>

<template>
    <div>
      <h1>Actualizar Perfil</h1>
      <form @submit.prevent="updateProfile">
        <label>
          Nuevo Nombre:
          <input type="text" v-model="newName" />
        </label>
        <button type="submit">Actualizar</button>
      </form>
    </div>
</template>
  
  