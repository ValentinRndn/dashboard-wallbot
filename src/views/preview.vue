<template>
    <div class="preview flex flex-col gap-5">
      <div class="previsualisation-desc">
        <h1 class="text-2xl font-semibold">Système de prévisualisation</h1>
        <p class="text-light-grey ">Mets en place un captcha, envoie automatiquement des messages à tes nouveaux membres, attribue leur des rôles et fais leur des message d'adieu.</p>
      </div>     
            <!-- Bouton Toggle pour le captcha-->
            <div class="welcomeMessage border border-slate-800 rounded-xl bg-dark-blue2">
        <div class="welcomeMessageTitle flex w-full justify-between items-center p-4">
          <h2 class="text-lg font-semibold">Utiliser un captcha pour vérifier que les nouveaux membres sont des humains</h2>
  
          <!-- Bouton toggle personnalisé -->
          <input
            id="cb-captcha"
            type="checkbox"
            class="hide-me"
            aria-labelledby="cb-label"
            @change="toggleCaptcha"
            :checked="isCaptchaOpen"
          >
          <label for="cb-captcha" class="toggle"></label>
        </div>
  
        <!-- Section de configuration des messages de bienvenue -->
        <div v-if="isCaptchaOpen" class="welcome-config p-4">

          <h3 class="text-light-grey mb-4">Message de vérification <span class="text-red">*</span> </h3>

          <div class="captcha flex flex-row gap-2 w-2/4">
            <img class="pp w-9 h-9 rounded-full border border-slate-800 object-center mt-3" src="../assets/logo-wallbot.png" alt="logo-wallbot">

            <div class="captcha-right flex flex-col gap-2">
              <div class="bot flex gap-2 w-fit">
                <div class="bot-pseudo flex items-center justify-center gap-2">
                  <p class="font-semibold">WallBot</p>
                  <div class="bot-tag flex items-center text-center bg-discord w-fit h-[20px] px-1 rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor" d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275z" />
                    </svg>
                    <p class="text-sm font-semibold">BOT</p>
                  </div>
                  </div>
                </div>
            

            <!-- Contenu avec la barre bleue verticale -->
            <div class="captcha-content bg-grey-discord p-4 flex flex-col gap-2 rounded-lg border-l-4 border-blue w-full">
              <h3 class="font-semibold">Vérification</h3>
              <p class="text-sm">Pour accéder à ce serveur et voir tous les salons, tu dois d'abord prouver que tu es un être humain. Clique sur le bouton ci-dessous pour commencer</p>
            </div>

            <!-- Bouton de vérification -->
            <button class="bg-blue text-white rounded-md w-[80px] font-semibold p-2">Vérifier</button>
          </div>
        </div>

        <div class="border-b border-slate-800 my-4"></div>

        <button class="bg-blue text-white rounded-md w-[80px] font-semibold p-2">Publier</button>

        </div>
      </div>
  

<!---------------------------------------------------------------------------------------------- -->

      <!-- Bouton Toggle pour la configuration des messages de bienvenue -->
      <div class="welcomeMessage border border-slate-800 rounded-xl bg-dark-blue2">
        <div class="welcomeMessageTitle flex w-full justify-between items-center p-4">
          <h2 class="text-lg font-semibold">Envoyer un message de bienvenue aux nouveaux utilisateurs</h2>
  


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

          <h3 class="text-light-grey">Salon des Messages de Bienvenue <span class="text-red">*</span> </h3>
          <select class=" rounded-md border bg-dark-blue2 border-slate-800 mb-4  mt-2 pl-3 py-2 pr-24">
            <option value="general">Général</option>
            <option value="welcome">Bienvenue</option>
            <option value="rules">Règles</option>
        </select>


          <div class="border-b border-slate-800 mb-4"></div>


          <div class="flex flex-col gap-4">
            <textarea
              id="welcome-message"
              v-model="welcomeMessage"
              class="p-2 rounded-md border bg-dark-blue2 border-slate-800 w-1/3 mb-4"
              rows="4"
              placeholder="Entrez votre message de bienvenue ici..."
            ></textarea>
          </div>
        </div>

        
      </div>
  
<!---------------------------------------------------------------------------------------------- -->
      <!-- Bouton Toggle pour la configuration des messages privés des nouveaux membres -->
      <div class="welcomeMessage border border-slate-800 rounded-xl bg-dark-blue2">
        <div class="welcomeMessageTitle flex w-full justify-between items-center p-4">
          <h2 class="text-lg font-semibold">Envoyer un message privé aux nouveaux utilisateurs</h2>
  
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
              id="welcome-message"
              v-model="welcomeMessage"
              class="p-2 rounded-md border bg-dark-blue2 border-slate-800 w-1/3 mb-4"
              rows="4"
              placeholder="Entrez votre message de bienvenue ici..."
            ></textarea>
          </div>
        </div>
      </div>
<!---------------------------------------------------------------------------------------------- -->

            <!-- Bouton Toggle pour la configuration des rôles à l'arrivée -->
            <div class="welcomeMessage border border-slate-800 rounded-xl bg-dark-blue2">
        <div class="welcomeMessageTitle flex w-full justify-between items-center p-4">
          <h2 class="text-lg font-semibold">Attribuer un rôle aux nouveaux utilisateurs</h2>
  
          <!-- Bouton toggle personnalisé -->
          <input
            id="cb-toggle"
            type="checkbox"
            class="hide-me"
            aria-labelledby="cb-label"
            @change="toggleConfigRole"
            :checked="isRoleConfigOpen"
          >
          <label for="cb-toggle" class="toggle"></label>
        </div>
  
        <!-- Section de configuration des messages de bienvenue -->
        <div v-if="isRoleConfigOpen" class="welcome-config p-4">
          <!-- Rôle d'arrivée -->
          <h3 class="text-light-grey">Rôle d'arrivée</h3>
          <select class=" rounded-md border bg-dark-blue2 border-slate-800 mb-4  mt-2 pl-3 py-2 pr-24">
            <option value="general">Admin</option>
            <option value="welcome">Modo</option>
            <option value="rules">Membre</option>
        </select>
        </div>
      </div>

      <!---------------------------------------------------------------------------------------------- -->



    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // États pour chaque section de configuration
  const isWelcomeConfigOpen = ref(false);
  const isPrivateMessageConfigOpen = ref(false);
  const isRoleConfigOpen = ref(false);
  const isCaptchaOpen = ref(false);
  const isPredefinedDesignConfigOpen = ref(false);

  
  // Messages pour chaque section
  const welcomeMessage = ref('');
  const privateMessage = ref('');
    const configRole = ref('');
    const welcomeCardConfig = ref('');
    const predefinedDesignConfig = ref('');

  
  // Fonctions de basculement pour chaque section
  const toggleWelcomeConfig = () => {
    isWelcomeConfigOpen.value = !isWelcomeConfigOpen.value;
  };
  
  const togglePrivateMessageConfig = () => {
    isPrivateMessageConfigOpen.value = !isPrivateMessageConfigOpen.value;
  };

    const toggleConfigRole = () => {
        isRoleConfigOpen.value = !isRoleConfigOpen.value;
    };


    const toggleCaptcha = () => {
        isCaptchaOpen.value = !isCaptchaOpen.value;
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