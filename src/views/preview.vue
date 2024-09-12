<template>
    <div class="preview flex flex-col gap-5">
  
      <!-- Bouton Toggle pour la configuration des messages de bienvenue -->
      <div class="welcomeMessage border border-slate-800 rounded-xl">
        <div class="welcomeMessageTitle flex w-full justify-between items-center p-4">
          <h1 class="text-xl font-semibold">Envoyer un message de bienvenue aux nouveaux utilisateurs</h1>
  
          <!-- Bouton toggle personnalisé -->
          <input
            id="cb-toggle-welcome"
            type="checkbox"
            class="hide-me"
            @change="toggleWelcomeConfig"
            :checked="isWelcomeConfigOpen"
          >
          <label for="cb-toggle-welcome" class="toggle"></label>
        </div>
  
        <!-- Section de configuration des messages de bienvenue -->
        <div v-if="isWelcomeConfigOpen" class="welcome-config p-4">
          <div class="flex flex-col gap-4">
            <textarea
              id="welcome-message"
              v-model="welcomeMessage"
              class="p-2 rounded-md border bg-dark-blue2 border-slate-800"
              rows="4"
              placeholder="Entrez votre message de bienvenue ici..."
            ></textarea>
          </div>
        </div>
      </div>
  
<!---------------------------------------------------------------------------------------------- -->
      <!-- Bouton Toggle pour la configuration des messages privés des nouveaux membres -->
      <div class="welcomeMessage border border-slate-800 rounded-xl">
        <div class="welcomeMessageTitle flex w-full justify-between items-center p-4">
          <h1 class="text-xl font-semibold">Envoyer un message privé aux nouveaux membres</h1>
  
          <!-- Bouton toggle personnalisé -->
          <input
            id="cb-toggle-private"
            type="checkbox"
            class="hide-me"
            @change="togglePrivateMessageConfig"
            :checked="isPrivateMessageConfigOpen"
          >
          <label for="cb-toggle-private" class="toggle"></label>
        </div>
  
        <!-- Section de configuration des messages privés -->
        <div v-if="isPrivateMessageConfigOpen" class="welcome-config p-4">
          <div class="flex flex-col gap-4">
            <textarea
              id="private-message"
              v-model="privateMessage"
              class="p-2 rounded-md border bg-dark-blue2 border-slate-800"
              rows="4"
              placeholder="Entrez votre message privé ici..."
            ></textarea>
          </div>
        </div>
      </div>
<!---------------------------------------------------------------------------------------------- -->

            <!-- Bouton Toggle pour la configuration des messages de bienvenu public -->
            <div class="welcomeMessage border border-slate-800 rounded-xl">
        <div class="welcomeMessageTitle flex w-full justify-between items-center p-4">
          <h1 class="text-xl font-semibold">Envoyer un message de bienvenue public</h1>
  
          <!-- Bouton toggle personnalisé -->
          <input
            id="cb-toggle"
            type="checkbox"
            class="hide-me"
            aria-labelledby="cb-label"
            @change="togglePublicMessageConfig"
            :checked="isPublicMessageConfigOpen"
          >
          <label for="cb-toggle" class="toggle"></label>
        </div>
  
        <!-- Section de configuration des messages de bienvenue -->
        <div v-if="isPublicMessageConfigOpen" class="welcome-config p-4">
          <div class="flex flex-col gap-4">
            <textarea
              id="welcome-public-message"
              v-model="publicMessage"
              class="p-2 rounded-md border bg-dark-blue2 border-slate-800"
              rows="4"
              placeholder="Entrez votre message de bienvenue ici..."
            ></textarea>
  
          </div>
        </div>
      </div>
<!---------------------------------------------------------------------------------------------- -->

            <!-- Bouton Toggle pour la configuration du salon -->
            <div class="welcomeMessage border border-slate-800 rounded-xl">
        <div class="welcomeMessageTitle flex w-full justify-between items-center p-4">
          <h1 class="text-xl font-semibold">Configuration du salon</h1>
  
          <!-- Bouton toggle personnalisé -->
          <input
            id="cb-toggle-config-room"
            type="checkbox"
            class="hide-me"
            aria-labelledby="cb-label"
            @change="toggleRoomConfig"
            :checked="isRoomConfigOpen"
          >
          <label for="cb-toggle-config-room" class="toggle"></label>
        </div>
  
        <!-- Section de configuration des messages de bienvenue -->
        <div v-if="isRoomConfigOpen" class="welcome-config p-4">
          <div class="flex flex-col gap-4">
            <textarea
              id="room-config"
              v-model="roomConfig"
              class="p-2 rounded-md border bg-dark-blue2 border-slate-800"
              rows="4"
              placeholder="Entrez votre message de bienvenue ici..."
            ></textarea>
  
          </div>
        </div>
      </div>

      <!---------------------------------------------------------------------------------------------- -->

            <!-- Bouton Toggle pour la configuration du thème de la carte de bienvenue -->
            <div class="welcomeMessage border border-slate-800 rounded-xl">
        <div class="welcomeMessageTitle flex w-full justify-between items-center p-4">
          <h1 class="text-xl font-semibold">Personnaliser la carte de bienvenue</h1>
  
          <!-- Bouton toggle personnalisé -->
          <input
            id="cb-toggle-welcome-card"
            type="checkbox"
            class="hide-me"
            aria-labelledby="cb-label"
            @change="toggleWelcomeCardConfig"
            :checked="isWelcomeCardConfigOpen"
          >
          <label for="cb-toggle-welcome-card" class="toggle"></label>
        </div>
  
        <!-- Section de configuration des messages de bienvenue -->
        <div v-if="isWelcomeCardConfigOpen" class="welcome-config p-4">
          <div class="flex flex-col gap-4">
            <textarea
              id="welcome-message"
              v-model="welcomeCardConfig"
              class="p-2 rounded-md border bg-dark-blue2 border-slate-800"
              rows="4"
              placeholder="Entrez votre message de bienvenue ici..."
            ></textarea>
  
          </div>
        </div>
      </div>


            <!---------------------------------------------------------------------------------------------- -->

            <!-- Bouton Toggle pour la configuration d'un design prédéfini -->
            <div class="welcomeMessage border border-slate-800 rounded-xl">
        <div class="welcomeMessageTitle flex w-full justify-between items-center p-4">
          <h1 class="text-xl font-semibold">Importer un design prédéfini</h1>
  
          <!-- Bouton toggle personnalisé -->
          <input
            id="cb-toggle-predefined-design"
            type="checkbox"
            class="hide-me"
            aria-labelledby="cb-label"
            @change="togglePredefinedDesignConfig"
            :checked="isPredefinedDesignConfigOpen"
          >
          <label for="cb-toggle-predefined-design" class="toggle"></label>
        </div>
  
        <!-- Section de configuration des messages de bienvenue -->
        <div v-if="isPredefinedDesignConfigOpen" class="welcome-config p-4">
          <div class="flex flex-col gap-4">
            <textarea
              id="welcome-message"
              v-model="predefinedDesignConfig"
              class="p-2 rounded-md border bg-dark-blue2 border-slate-800"
              rows="4"
              placeholder="Entrez votre message de bienvenue ici..."
            ></textarea>
  
          </div>
        </div>
      </div>

    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // États pour chaque section de configuration
  const isWelcomeConfigOpen = ref(false);
  const isPrivateMessageConfigOpen = ref(false);
  const isPublicMessageConfigOpen = ref(false);
  const isRoomConfigOpen = ref(false);
  const isWelcomeCardConfigOpen = ref(false);
  const isPredefinedDesignConfigOpen = ref(false);

  
  // Messages pour chaque section
  const welcomeMessage = ref('');
  const privateMessage = ref('');
    const publicMessage = ref('');
    const roomConfig = ref('');
    const welcomeCardConfig = ref('');
    const predefinedDesignConfig = ref('');

  
  // Fonctions de basculement pour chaque section
  const toggleWelcomeConfig = () => {
    isWelcomeConfigOpen.value = !isWelcomeConfigOpen.value;
  };
  
  const togglePrivateMessageConfig = () => {
    isPrivateMessageConfigOpen.value = !isPrivateMessageConfigOpen.value;
  };

    const togglePublicMessageConfig = () => {
        isPublicMessageConfigOpen.value = !isPublicMessageConfigOpen.value;
    };

    const toggleRoomConfig = () => {
        isRoomConfigOpen.value = !isRoomConfigOpen.value;
    };

    const toggleWelcomeCardConfig = () => {
        isWelcomeCardConfigOpen.value = !isWelcomeCardConfigOpen.value;
    };

    const togglePredefinedDesignConfig = () => {
        isPredefinedDesignConfigOpen.value = !isPredefinedDesignConfigOpen.value;
    };


  
  </script>
  
  <style scoped>
  .toggle-button {
    cursor: pointer;
    transition: background-color 0.2s ease-out;
    
  }
  
  
  .toggle {
    position: relative;
    display: inline-block;
    margin-top: 0.5rem;
    width: 50px;
    height: 26px;
    background-color: #00050c;
    border-color: rgb(30 41 59);
    border-width: 1px;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.25s ease-in;
  }
  .toggle::after {
    content: '';
    position: absolute;
    top: 1.4px;
    left: 2px;
    width: 22px;
    height: 22px;
    background-color: white;
    
    border-radius: 50%;
    transition: all 0.25s ease-out;
  }
  input[type="checkbox"]:checked + .toggle {
    background-color: #3B82F6;
  }
  input[type="checkbox"]:checked + .toggle::after {
    transform: translateX(24px);
  }
  .hide-me {
    opacity: 0;
    height: 0;
    width: 0;
  }
  </style>