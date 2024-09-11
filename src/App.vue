<template>
  <div class="flex min-h-screen">
    <!-- Sidebar Component -->
    <sidebar />

    <!-- Main Content Area -->
    <div class="flex-1 p-4 bg-dark-blue text-white">
      <!-- Contenu de la vue actuelle -->
      <router-view />
    </div>
  </div>
</template>

<style>

</style>

<script setup> 
import sidebar from './components/sidebar.vue';
</script>