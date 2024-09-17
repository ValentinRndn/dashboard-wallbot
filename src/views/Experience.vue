<template>
    <div class="flex min-h-screen">
        <!-- Barre latérale gauche -->
        <div class="flex-shrink-0 w-64 md:w-1/5 lg:w-1/6 bg-gray-800 text-white">
        <!-- ServerBar Component -->
        <serverBar />
        <!-- Sidebar Component -->
        <sidebar />
        </div>
        
        <!-- Contenu principal -->
        <div class="flex-1 p-4 bg-dark-blue text-white ml-[85px] lg:ml-[16rem]">
        <!-- Contenu de la vue actuelle -->
        <router-view />
        </div>
    </div>
</template>