<template>
  <div class="app bg-light-grey">
    <router-view />
    <sidebar />
    
  </div>
</template>

<style>

</style>

<script setup> 
import sidebar from './components/sidebar.vue';
</script>