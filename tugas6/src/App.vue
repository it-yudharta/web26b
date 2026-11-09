<script setup>
import { ref } from 'vue';

const todo = ref('')
</script>

<template>
  <input v-model="todo">
  <h1>{{ todo }}</h1>
</template>

<style scoped></style>
