<template>
    <aside :class="{ 'is-expanded': is_expanded }" class="flex flex-col w-[calc(2rem+32px)] min-h-[100vh] overflow-hidden p-4 bg-grey ease-out duration-200">
    
      <div class="navigation my-0 -mx-4 z-10">
        <router-link :class="['button', { 'text-blue bg-blue': currentPage === '/backOffice/dashboard' }]" to="/backOffice/dashboard">
            <img src="../assets/logo-wallbot.png" :class="[iconClass]" alt="logo-wallbot" class="">
            <span class="text" :class="{ 'text-purple': currentPage === '/backOffice/dashboard' }"></span>
        </router-link>
        <router-link :class="['button', { 'text-blue bg-blue': currentPage === '/backOffice/dashboard' }]" to="/backOffice/dashboard">
            <svg xmlns="http://www.w3.org/2000/svg" :class="[iconClass, 'mt-4', 'mb-4']" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M5 20v-9.15L2.2 13L1 11.4L12 3l4 3.05V4h3v4.35l4 3.05l-1.2 1.6l-2.8-2.15V20h-5v-6h-4v6zm5-9.975h4q0-.8-.6-1.313T12 8.2t-1.4.513t-.6 1.312"/></svg>
          <span class="text" :class="{ 'text-purple': currentPage === '/backOffice/dashboard' }">Tableau de bord</span>
        </router-link>
  
        <router-link :class="['button', { 'text-purple bg-blue': currentPage === '/backOffice/blog' }]" to="/backOffice/blog">
            <svg xmlns="http://www.w3.org/2000/svg"  :class="[iconClass, 'mt-4', 'mb-4']" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-miterlimit="5.759" d="M3 3v16a2 2 0 0 0 2 2h16"/><path stroke-miterlimit="5.759" d="m7 14l4-4l4 4l6-6"/><path d="M18 8h3v3"/></g></svg>
                      <span class="text" :class="{ 'text-purple': currentPage === '/backOffice/blog' }">Prévisualisation</span>
        </router-link>
  
        <router-link :class="['button', { 'text-purple bg-blue': currentPage === '/backOffice/landing' }]" to="/backOffice/landing">
            <svg xmlns="http://www.w3.org/2000/svg" :class="[iconClass, 'mt-4', 'mb-4']" width="32" height="32" viewBox="0 0 12 12"><path fill="#ffffff" d="M5 2.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M6 7a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M3.55 5H2a1 1 0 0 0-1 1v.207c0 .596.343 1.086.797 1.407c.272.193.597.336.952.42c.269-.488.736-.85 1.292-.981A2.49 2.49 0 0 1 3.55 5m4.41 2.053a2 2 0 0 1 1.291.98c.355-.083.68-.226.952-.419c.454-.32.797-.811.797-1.407V6a1 1 0 0 0-1-1H8.45a2.51 2.51 0 0 1-.49 2.053M4.5 8a1 1 0 0 0-1 1v.167c0 .587.357 1.058.808 1.358C4.763 10.83 5.363 11 6 11s1.237-.171 1.692-.475c.45-.3.808-.771.808-1.358V9a1 1 0 0 0-1-1zM9 4a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"/></svg>
                      <span class="text" :class="{ 'text-purple': currentPage === '/backOffice/landing' }">XP System</span>
        </router-link>
  
        <router-link :class="['button', { 'text-purple bg-blue': currentPage === '/backOffice/users' }]" to="/backOffice/users">
            <svg xmlns="http://www.w3.org/2000/svg" :class="[iconClass, 'mt-4', 'mb-4']" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M10.96 21q-.349 0-.605-.229q-.257-.229-.319-.571l-.263-2.092q-.479-.145-1.036-.454q-.556-.31-.947-.664l-1.915.824q-.317.14-.644.03t-.504-.415L3.648 15.57q-.177-.305-.104-.638t.348-.546l1.672-1.25q-.045-.272-.073-.559q-.03-.288-.03-.559q0-.252.03-.53q.028-.278.073-.626l-1.672-1.25q-.275-.213-.338-.555t.113-.648l1.06-1.8q.177-.287.504-.406t.644.021l1.896.804q.448-.373.97-.673q.52-.3 1.013-.464l.283-2.092q.061-.342.318-.571T10.96 3h2.08q.349 0 .605.229q.257.229.319.571l.263 2.112q.575.202 1.016.463t.909.654l1.992-.804q.318-.14.645-.021t.503.406l1.06 1.819q.177.306.104.638t-.348.547L18.36 10.92q.082.31.092.569t.01.51q0 .233-.02.491q-.019.259-.088.626l1.69 1.27q.275.213.358.546t-.094.638l-1.066 1.839q-.176.306-.513.415q-.337.11-.654-.03l-1.923-.824q-.467.393-.94.673t-.985.445l-.264 2.111q-.061.342-.318.571t-.605.23zm.04-1h1.956l.369-2.708q.756-.2 1.36-.549q.606-.349 1.232-.956l2.495 1.063l.994-1.7l-2.189-1.644q.125-.427.166-.786q.04-.358.04-.72q0-.38-.04-.72t-.166-.747l2.227-1.683l-.994-1.7l-2.552 1.07q-.454-.499-1.193-.935q-.74-.435-1.4-.577L13 4h-1.994l-.312 2.689q-.756.161-1.39.52q-.633.358-1.26.985L5.55 7.15l-.994 1.7l2.169 1.62q-.125.336-.175.73t-.05.82q0 .38.05.755t.156.73l-2.15 1.645l.994 1.7l2.475-1.05q.589.594 1.222.953q.634.359 1.428.559zm.973-5.5q1.046 0 1.773-.727T14.473 12t-.727-1.773t-1.773-.727q-1.052 0-1.776.727T9.473 12t.724 1.773t1.776.727M12 12"/></svg>
                      <span class="text" :class="{ 'text-purple': currentPage === '/backOffice/users' }">Modération</span>
        </router-link>
  
        <router-link :class="['button', { 'text-purple bg-blue': currentPage === '/backOffice/documentation' }]" to="/backOffice/documentation">
            <svg xmlns="http://www.w3.org/2000/svg" :class="[iconClass, 'mt-4', 'mb-4']" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"/></svg> 
                     <span class="text" :class="{ 'text-purple': currentPage === '/backOffice/documentation' }">Rôles</span>
        </router-link>
  
        <router-link :class="['button', { 'text-purple bg-blue': currentPage === '/backOffice/structure' }]" to="/backOffice/structure">
            <svg xmlns="http://www.w3.org/2000/svg" :class="[iconClass, 'mt-4', 'mb-4']" width="32" height="32" viewBox="0 0 256 256"><path fill="#ffffff" d="M232 102a6 6 0 0 0 6-6V64a14 14 0 0 0-14-14H32a14 14 0 0 0-14 14v32a6 6 0 0 0 6 6a26 26 0 0 1 0 52a6 6 0 0 0-6 6v32a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14v-32a6 6 0 0 0-6-6a26 26 0 0 1 0-52M30 192v-26.47a38 38 0 0 0 0-75.06V64a2 2 0 0 1 2-2h58v132H32a2 2 0 0 1-2-2m196-26.47V192a2 2 0 0 1-2 2H102V62h122a2 2 0 0 1 2 2v26.47a38 38 0 0 0 0 75.06"/></svg>
                      <span class="text" :class="{ 'text-purple': currentPage === '/backOffice/structure' }">Tickets</span>
        </router-link>
      <router-link :class="['button', { 'text-purple bg-blue': currentPage === '/backOffice/test' }]" to="/backOffice/test">
        <svg xmlns="http://www.w3.org/2000/svg" :class="[iconClass, 'mt-4', 'mb-4']" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M6 22q-1.25 0-2.125-.875T3 19V5q0-1.25.875-2.125T6 2h11v16H6q-.425 0-.712.288T5 19t.288.713T6 20h13V4h2v18zm3-6h6V4H9zm-2 0V4H6q-.425 0-.712.288T5 5v11.175q.25-.075.488-.125T6 16zM5 4v12.175z"/></svg>
                <span class="text" :class="{ 'text-purple': currentPage === '/backOffice/test' }">Logs</span>
      </router-link>
    <router-link :class="['button', { 'text-purple bg-blue': currentPage === '/backOffice/rer' }]" to="/backOffice/rer">
        <svg xmlns="http://www.w3.org/2000/svg" :class="[iconClass, 'mt-4', 'mb-4']" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"/></svg>
                <span class="text" :class="{ 'text-purple': currentPage === '/backOffice/rer' }">Déconnexion</span>
      </router-link>
    </div> 
  
      <div class="menu-toggle-wrap flex justify-end items-end relative top-0 ease-out duration-200 mt-4 mb-4">
        <button class="menu-toggle" @click="ToggleMenu">
          <span class="material-icons">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.41 6L5 7.41L9.58 12L5 16.59L6.41 18l6-6z"/><path fill="currentColor" d="m13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"/></svg>
          </span>
        </button>
      </div>
  
    </aside>
  </template>
  
  
  
  <script setup>
import { ref, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
  
  const is_expanded = ref(false);
  const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value;
  };
  
  const currentPage = ref(''); // Initialisez currentPage avec une référence
  
  const route = useRoute(); // Obtenez la route actuelle avec useRoute
  
  watch(
    () => route.path, // Surveillez la propriété path de l'objet route
    (newPath) => {
      currentPage.value = newPath; // Met à jour currentPage avec le chemin de la route actuelle
    }
  );
  
  // Mettez à jour currentPage lorsque le composant est monté
  currentPage.value = route.path;

  const iconClass = computed(() => is_expanded.value ? 'w-6 h-6 min-w-[24px] min-h-[24px]' : 'w-8 h-8 min-w-[32px] min-h-[32px]');
const toggleIconClass = computed(() => is_expanded.value ? 'w-6 h-6 transform rotate-180' : 'w-8 h-8');

  </script>
  
  
  <style scoped>
  .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-out;
    overflow: hidden; 
    white-space: nowrap; 
  }
  
  .button {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    transition: background-color 0.2s ease-out, width 0.2s ease-out;
    gap: 10px;
  }
  
  .button:hover {
    background-color: #58B9EA;
  }
  
  .menu .button {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: background-color 0.2s ease-out;
  }
  
  .menu .button .material-icons {
    font-size: 2rem;
    color: #fff;
    transition: color 0.2s ease-out;
  }
  
  .menu .button .text {
    color: #fff;
    transition: color 0.2s ease-out;
  }
  
  .is-expanded {
    width: 250px;
  }
  
  .navigation .is_expanded {
    top: -4rem;
  }
  
  .is-expanded .menu-toggle-wrap .menu-toggle {
    transform: rotate(180deg);
  }
  
  .is-expanded .button .text {
    opacity: 1;
    color: #fff;
  }
  
  .menu-toggle-wrap .menu-toggle {
    transition: transform 0.2s ease-out;
  }
  
  .menu-toggle-wrap .menu-toggle .material-icons {
    font-size: 2rem;
    color: #fff;
    transition: color 0.2s ease-out;
  }
  
  .menu-toggle-wrap .menu-toggle:hover .material-icons {
    color: #58B9EA;
    transform: translateX(0.5rem);
  }
  
  .menu-toggle-wrap .menu-toggle .material-icons .menu-toggle {
    transform: rotate(-180deg);
  }
  
  </style>
  
  
  
  
  <!-- Exportation du composant -->
  <script>
  
  export default {
    name: 'sidebar',
  }
  
  </script>