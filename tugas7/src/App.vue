<script setup></script>

<template>
  <nav class="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: space-evenly;
}
</style>
