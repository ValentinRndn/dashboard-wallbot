<template>
  <div class="preview flex flex-col gap-5 w-full">
    <div class="experience-desc flex items-center gap-20 w-full">
      <div class="text-desc">
      <h1 class="text-2xl font-semibold">Système de Niveaux</h1>
      <p class="text-light-grey">
        Créer un système de niveaux pour les utilisateurs de ton serveur.
      </p>
    </div>
      <input
          id="cb-captcha"
          type="checkbox"
          class="hide-me"
          aria-labelledby="cb-label"
        />
        <label for="cb-captcha" class="toggle"></label>

    </div>
    <div class="border-b border-slate-800 mb-4 w-full y-4"></div>

    <div class="superior-level w-full">
        <h2 class="text-lg font-semibold">Passage au niveau supérieur</h2>
        <h3 class="text-light-grey mb-4">Quand un utilisateur monte un niveau, notifie-le dans un salon dédié</h3>

        <div class="superior-level-options flex gap-20 w-full">
            <div class="left-options" >
                <h3 class="text-light-grey mb-2">Choisis le salon dédié à la notification</h3>
                <select class="rounded-md border bg-dark-blue2 border-slate-800 mb-4 pl-3 py-2 pr-24">
                    <option value="general"># récompenses</option>
                    <option value="welcome"># options</option>
                    <option value="rules"># notifications</option>
            </select>
    </div>
    <div class="right-options w-1/2">
        <h3 class="text-light-grey mb-2">Message de notification</h3>
        <textarea
            id="upgrade-message"
            class="w-full p-2 rounded-md border bg-dark-blue2 border-slate-800  mb-4"
            rows="4"
            placeholder="Bravo {player} tu as atteint le niveau {level} !"
            v-model="messageRankup"
          ></textarea>
          </div>

          
        </div>

        <div class="ratio-experience flex gap-20">
            <div class="ratio-message">
        <h3 class="text-light-grey mb-2">Ratio d'expérience par message</h3>
                <select class="rounded-md border bg-dark-blue2 border-slate-800 mb-4 pl-3 py-2 pr-24">
                    <option value="general"># récompenses</option>
                    <option value="welcome"># options</option>
                    <option value="rules"># notifications</option>
            </select>
        </div>

        <div class="ratio-vocal">
            <h3 class="text-light-grey mb-2">Ratio d'expérience en vocal</h3>
                <select class="rounded-md border bg-dark-blue2 border-slate-800 mb-4 pl-3 py-2 pr-24">
                    <option value="general"># récompenses</option>
                    <option value="welcome"># options</option>
                    <option value="rules"># notifications</option>
            </select>
            </div>
        </div>
    </div>

    <div class="role-selection">
    <!-- Bouton pour afficher/masquer les rôles -->
    <h3 class="text-light-grey mb-2">Rôles avec / sans gain d'expérience</h3>


    <!-- Liste déroulante des rôles -->
    <div v-if="showRoles" class="role-dropdown w-fit absolute flex flex-col justify-center bg-dark-blue2 p-4 mt-20 rounded-lg border border-slate-800 z-50">
      <div
        v-for="role in allRoles"
        :key="role.name"
        @click="selectRole(role)"
        :style="{ borderColor: role.color }"
        class="role-item text-white px-3 py-1 rounded-full mb-2 cursor-pointer  border border-slate-800">
        {{ role.name }}
      </div>
    </div>
    
        <!-- Div qui affiche les rôles sélectionnés avec leur couleur -->
        <div class="selected-roles flex flex-wrap gap-2 mb-4 bg-dark-blue2 p-4 rounded-lg border border-slate-800">
            <button @click="toggleRoleDropdown" class=" text-white font-bold px-4 py-2 rounded-lg  border border-slate-800 z-20">{{ showRoles ? "x" : "+" }}</button>
        <div
        v-for="role in selectedRoles"
        :key="role.name"
        :style="{ borderColor: role.color }"
        class="role-item text-white px-3 py-1 rounded-full flex items-center font-semibold border">
        {{ role.name }}
        <span @click="removeRole(role.name)" :style="{ backgroundColor : role.color }" class="ml-2 w-4 h-4 rounded-full cursor-pointer font-semibold flex items-center justify-center relative hover:text-white hover:bg-red-500 transition-colors duration-300"></span>      </div>
    </div>
  </div>


  <!-- Div qui affiche les rooms sélectionnées avec leur couleur -->
<h3 class="text-light-grey mb-[-10px]">Salon avec / sans gain d'expérience</h3>
<div class="selected-Room relative flex flex-wrap gap-2 mb-4 bg-dark-blue2 p-4 rounded-lg border border-slate-800">
  <button @click="toggleRoomDropdown" class="text-white font-bold px-4 py-2 rounded-lg border border-slate-800 z-20">
    {{ showRooms ? "x" : "+" }}
  </button>
  
  <div
    v-for="room in selectedRooms"
    :key="room.name"
    :style="{ borderColor: room.color }"
    class="room-item text-white px-3 py-1 rounded-full flex items-center font-semibold border">
    {{ room.name }}
    <span @click="removeRoom(room.name)" :style="{ backgroundColor: room.color }" class="ml-2 w-4 h-4 pb-1 rounded-full cursor-pointer font-semibold flex items-center justify-center relative  hover:bg-red-500 transition-colors duration-300">
    </span>
  </div>

  <!-- Menu déroulant -->
  <div v-if="showRooms" class="absolute left-0 top-full w-fit mt-2 bg-dark-blue2 p-4 rounded-lg border border-slate-800 z-40">
    <div
      v-for="room in allRooms"
      :key="room.name"
      @click="selectRoom(room)"
      :style="{ borderColor: room.color }"
      class="room-item text-white px-3 py-1 rounded-full mb-2 cursor-pointer hover:opacity-80 border">
      {{ room.name }}
    </div>
  </div>
</div>

   </div>
</template>


<script>
export default {
  data() {
    return {
      // Tous les rôles disponibles avec leurs couleurs
      allRoles: [
        { name: "Développeur", color: "#3498db" },   
        { name: "Designer", color: "#e74c3c" },     
        { name: "Chef de projet", color: "#2ecc71" }, 
        { name: "Analyste", color: "#f39c12" },    
        { name: "Marketing", color: "#9b59b6" },    
        { name: "RH", color: "#e67e22" }           
      ],

      allRooms: [
        { name: "#1", color: "#3498db" },   
        { name: "#2", color: "#e74c3c" },     
        { name: "#3", color: "#2ecc71" }, 
        { name: "#4", color: "#f39c12" },    
        { name: "#5", color: "#9b59b6" },    
        { name: "#6", color: "#e67e22" }           
      ],
      allBoosterRoles: [
        { name: "#1", color: "#3498db" },   
        { name: "#2", color: "#e74c3c" },     
        { name: "#3", color: "#2ecc71" }, 
        { name: "#4", color: "#f39c12" },    
        { name: "#5", color: "#9b59b6" },    
        { name: "#6", color: "#e67e22" }           
      ],
      allBoosterRooms: [
        { name: "#1", color: "#3498db" },   
        { name: "#2", color: "#e74c3c" },     
        { name: "#3", color: "#2ecc71" }, 
        { name: "#4", color: "#f39c12" },    
        { name: "#5", color: "#9b59b6" },    
        { name: "#6", color: "#e67e22" }           
      ],
      selectedRoles: [],
      selectedRooms: [],
      selectedBoosterRoles: [],
      selectedBoosterRooms: [],

        showRooms: false,
        showRoles: false,
        showBoosterRooms: false,
        showBoosterRoles: false,
    };
  },
  methods: {
    // Ajouter un rôle si non sélectionné
    selectRole(role) {
      if (!this.selectedRoles.some(selected => selected.name === role.name)) {
        this.selectedRoles.push(role);
      }
    },
    // Supprimer un rôle de la sélection
    removeRole(roleName) {
      this.selectedRoles = this.selectedRoles.filter(role => role.name !== roleName);
    },
    // Afficher/Masquer la liste des rôles
    toggleRoleDropdown() {
      this.showRoles = !this.showRoles;
    },


    // Ajouter une room si non sélectionnée
    selectRoom(room) {
      if (!this.selectedRooms.some(selected => selected.name === room.name)) {
        this.selectedRooms.push(room);
      }
    },
    // Supprimer une room de la sélection
    removeRoom(roomName) {
      this.selectedRooms = this.selectedRooms.filter(room => room.name !== roomName);
    },
    // Afficher/Masquer la liste des rooms
    toggleRoomDropdown() {
      this.showRooms = !this.showRooms;
    },
  },
};
</script>
<script setup>
import { ref } from 'vue';

const messageRankup = ref('Bravo {player} tu as atteint le niveau {level} !');
</script>

<style>
.toggle-button {
  cursor: pointer;
  transition: background-color 0.2s ease-out;
}
span:hover::after {
  content: 'x';
  position: absolute;
  color: white;
  font-size: 15px;
  font-weight: bold;
  /* margin-bottom: 3px; */
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
  content: "";
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
  background-color: #3b82f6;
}
input[type="checkbox"]:checked + .toggle::after {
  transform: translateX(24px);
}

.hide-me {
  opacity: 0;
  height: 0;
  width: 0;
}

.room-item {
  transition: opacity 0.3s ease;
}
</style>