<script setup>
import { ref } from 'vue'

const props = defineProps({
  msg: String,
})

const count = ref(0)
const decrement = () => {
  count.value--
}
const increment = () => {
  count.value++
}
const reset = () => {
  count.value = 0
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <el-button type="info" >{{ count }}</el-button>
    <el-button type="danger" @click="decrement">disminuir </el-button>
    <el-button type="success" @click="increment">aumentar</el-button>
    <el-button type="primary" @click="reset">resetear</el-button>
  </div>
</template>


