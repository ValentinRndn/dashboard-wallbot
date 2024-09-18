<template>
  <div class="preview flex flex-col gap-5">
    <div class="previsualisation-desc">
      <h1 class="text-2xl font-semibold">Système de prévisualisation</h1>
      <p class="text-light-grey">
        Mets en place un captcha, envoie automatiquement des messages à tes
        nouveaux membres, attribue leur des rôles et fais leur des message
        d'adieu.
      </p>
          <div class="border-b border-slate-800 mb-4 w-full my-4"></div>

    </div>
    <!-- Bouton Toggle pour le captcha-->
    <div
      class="welcomeMessage border border-slate-800 rounded-xl bg-dark-blue2"
    >
      <div
        class="welcomeMessageTitle flex w-full justify-between items-center p-4"
      >
        <h2 class="text-lg font-semibold">
          Utiliser un captcha pour vérifier que les nouveaux membres sont des
          humains
        </h2>

        <!-- Bouton toggle personnalisé -->
        <input
          id="cb-captcha"
          type="checkbox"
          class="hide-me"
          aria-labelledby="cb-label"
          @change="toggleCaptcha"
          :checked="isCaptchaOpen"
        />
        <label for="cb-captcha" class="toggle"></label>
      </div>

      <!-- Section de configuration des messages de bienvenue -->
      <div v-if="isCaptchaOpen" class="welcome-config p-4">
        <h3 class="text-light-grey mb-4">
          Message de vérification <span class="text-red">*</span>
        </h3>

        <div class="captcha flex flex-row gap-2 w-2/4">
          <div class="captcha-left flex flex-col gap-2">
            <img
              class="pp w-9 h-9 rounded-full border border-slate-800 object-center mt-3"
              src="../assets/logo-wallbot.png"
              alt="logo-wallbot"
            />
            <div class="relative inline-block">
              <img
                src="../assets/captcha/colorPalett.png"
                @click="triggerColorPicker"
                alt="colorPalett"
                class="w-9 h-9 rounded-full cursor-pointer border border-slate-800 object-center"
              />

              <!-- Input color masqué -->
              <input
                type="color"
                class="absolute top-0 left-0 opacity-0"
                :value="selectedColor"
                id="color-message"
                @input="selectedColor = $event.target.value"
                ref="colorPicker"
              />

              <button
                @click="toggleEdit"
                class="bg-blue text-white rounded-full font-semibold mt-2 border border-slate-800 w-9 h-9"
              >
                <div v-if="!isEditing" class="toggleEdit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    class="ml-2"
                  >
                    <path
                      fill="currentColor"
                      d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"
                    />
                  </svg>
                </div>
                <div v-else isEditing class="t">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    class="ml-[5px]"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div class="captcha-right flex flex-col gap-2">
            <div class="bot flex gap-2 w-fit">
              <div class="bot-pseudo flex items-center justify-center gap-2">
                <p class="font-semibold">WallBot</p>
                <div
                  class="bot-tag flex items-center text-center bg-discord w-fit h-[20px] px-1 rounded-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275z"
                    />
                  </svg>
                  <p class="text-sm font-semibold">BOT</p>
                </div>
              </div>
            </div>

            <!-- Contenu avec la barre de bordure verticale dynamique -->
            <div
              class="captcha-content bg-grey-discord p-4 flex flex-col gap-2 rounded-lg border-l-4 w-3/5 min-w-[500px] relative"
              :style="{ borderLeftColor: selectedColor }"
            >
              <!-- Affiche le paragraphe ou le textarea en fonction de l'état d'édition -->
              <div v-if="isEditing" class="flex flex-col">
                <div class="top-content flex justify-between">
                  <div class="top-left-content flex flex-col gap-2 w-full">
                    <input
                      v-model="titleContent"
                      class="bg-grey-discord font-semibold"
                      type="text"
                      name="titleContent"
                      id="titleContent"
                    />

                    <textarea
                      v-model="messageContent"
                      class="w-full p-2 rounded-md bg-grey-discord"
                      rows="4"
                    ></textarea>
                  </div>

                  <!-- Miniature Image -->
                  <div v-if="anotherImage" class="relative group w-24 h-20">
                    <img
                      :src="anotherImage"
                      alt="anotherImage"
                      class="w-24 h-20 cursor-pointer object-cover object-center rounded-lg group-hover:filter group-hover:grayscale group-hover:transition-all duration-300"
                      @click="removeImage('anotherImage')"
                    />
                  </div>

                  <div
                    v-else
                    class="file-upload-wrapper hover:text-blue w-[80px] h-[80px]"
                  >
                    <label
                      class="custom-file-upload flex items-center justify-center w-[80px] h-[80px] border border-dashed border-white rounded-lg cursor-pointer transition hover:border-blue"
                    >
                      <input
                        type="file"
                        @change="onImageChange($event, 'anotherImage')"
                        accept="image/*"
                      />
                      <div class="file-upload-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class=""
                          width="30"
                          height="30"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zm1-2h12l-3.75-5l-3 4L9 13zm-1 2V5z"
                          />
                        </svg>
                      </div>
                    </label>
                  </div>
                </div>

                <!-- Image d'intégration -->
                <div v-if="embedImage" class="relative w-full">
                  <img
                    :src="embedImage"
                    alt="embedImage"
                    class="w-full h-[150px] cursor-pointer object-cover object-center rounded-lg mt-4 group-hover:filter group-hover:grayscale group-hover:transition-all duration-300"
                    @click="removeImage('embedImage')"
                  />
                </div>
                <div
                  v-else
                  class="file-upload-wrapper w-full relative mx-auto hover:text-blue"
                >
                  <label
                    class="custom-file-upload flex items-center justify-center w-full h-[130px] mt-4 border border-dashed border-white rounded-lg cursor-pointer transition hover:border-blue"
                  >
                    <input
                      type="file"
                      @change="onImageChange($event, 'embedImage')"
                      accept="image/*"
                    />
                    <div class="file-upload-icon flex flex-col items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class=""
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zm1-2h12l-3.75-5l-3 4L9 13zm-1 2V5z"
                        />
                      </svg>
                    </div>
                  </label>
                </div>

                <!-- Image footer -->
                <div v-if="footerImage" class="relative">
                  <img
                    :src="footerImage"
                    alt="footerImage"
                    class="w-10 h-10 cursor-pointer rounded-full object-cover my-4"
                    @click="removeImage('footerImage')"
                  />
                </div>
                <div
                  v-else
                  class="file-upload-wrapper w-[50px] relative hover:text-blue"
                >
                  <label
                    class="custom-file-upload flex items-center justify-center w-[50px] h-[50px] border border-dashed border-white rounded-full cursor-pointer transition ease-in-out relative hover:border-blue mt-4"
                  >
                    <input
                      type="file"
                      @change="onImageChange($event, 'footerImage')"
                      accept="image/*"
                    />
                    <div class="file-upload-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class=""
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zm1-2h12l-3.75-5l-3 4L9 13zm-1 2V5z"
                        />
                      </svg>
                    </div>
                  </label>
                </div>
              </div>

              <div
                v-else
                @click="toggleEdit"
                class="isNotEditing relative cursor-pointer"
              >
                <!-- Texte avec effet de flou au survol -->
                <div class="hover:blur-sm duration-500">
                  <div
                    class="top-content-not-editing flex justify-between w-full"
                  >
                    <div
                      class="top-content-left-not-editingflex flex-col gap-2 max-w-1/2"
                    >
                      <h3 class="font-semibold mb-2">{{ titleContent }}</h3>
                      <p class="text-sm">{{ messageContent }}</p>
                    </div>

                    <div class="top-content-not-editing-right">
                      <div v-if="anotherImage" class="relative">
                        <img
                          :src="anotherImage"
                          alt="anotherImage"
                          class="w-48 h-20 cursor-pointer object-cover object-center rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  <div v-if="embedImage" class="relative mx-auto">
                    <img
                      :src="embedImage"
                      alt="embedImage"
                      class="w-full h-[150px] cursor-pointer object-cover object-center rounded-lg mt-4"
                    />
                  </div>
                  <div v-if="footerImage" class="relative">
                    <img
                      :src="footerImage"
                      alt="footerImage"
                      class="w-10 h-10 cursor-pointer rounded-full object-cover mt-4"
                    />
                  </div>
                </div>

                <!-- Icône d'édition qui apparaît au survol sans effet de flou -->
                <div
                  class="edit-icon absolute flex items-center justify-center opacity-0 transition-opacity duration-300 z-10 group-hover:opacity-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Bouton de vérification -->
            <button
              class="bg-discord text-white rounded-md w-[80px] font-semibold p-2"
            >
              Vérifier
            </button>
          </div>
        </div>

        <div class="border-b border-slate-800 my-4"></div>

        <button
          class="bg-blue text-white rounded-md w-[80px] font-semibold p-2"
        >
          Publier
        </button>
      </div>
    </div>

    <!---------------------------------------------------------------------------------------------- -->

    <!-- Bouton Toggle pour la configuration des messages de bienvenue -->
    <div
      class="welcomeMessage border border-slate-800 rounded-xl bg-dark-blue2"
    >
      <div
        class="welcomeMessageTitle flex w-full justify-between items-center p-4"
      >
        <h2 class="text-lg font-semibold">
          Envoyer un message de bienvenue aux nouveaux utilisateurs
        </h2>

        <!-- Bouton toggle personnalisé -->
        <input
          id="cb-toggle-welcome"
          type="checkbox"
          class="hide-me"
          @change="toggleWelcomeConfig"
          :checked="isWelcomeConfigOpen"
        />
        <label for="cb-toggle-welcome" class="toggle"></label>
      </div>

      <!-- Section de configuration des messages de bienvenue -->
      <div v-if="isWelcomeConfigOpen" class="welcome-config p-4">
        <h3 class="text-light-grey">
          Salon des Messages de Bienvenue <span class="text-red">*</span>
        </h3>
        <select
          class="rounded-md border bg-dark-blue2 border-slate-800 mb-4 mt-2 pl-3 py-2 pr-24"
        >
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

        <div class="border-b border-slate-800 mb-4"></div>

        <div class="welcome-public-card flex items-center gap-2">
          <div class="toggle-button">
            <input
              id="cb-toggle-welcome-card"
              type="checkbox"
              class="hide-me"
              @change="toggleWelcomePublicCard"
              :checked="welcomePublicCard"
            />
            <label for="cb-toggle-welcome-card" class="toggle"></label>
          </div>
          <h3 class="font-semibold">
            Envoyer une carte de bienvenue lorsqu'un utilisateur à rejoint le
            serveur
          </h3>
        </div>

        <div v-if="welcomePublicCard" class="welcomePublicCardContainer">
          <div
            class="card w-3/5 flex flex-col items-center justify-center py-5 px-24 border border-slate-800 rounded-lg mt-4"
            :style="{
              backgroundColor: selectedCardBgColor,
              fontFamily: selectedFont,
            }"
          >
            <img
              src="../assets/logo-wallbot.png"
              alt="card-logo"
              class="rounded-full w-[200px] border-4 border-white mb-3"
            />
            <p
              class="text-xl font-semibold"
              :style="{ color: mainCardTextColor }"
            >
              {{ mainCardText }}
            </p>

            <p
              class="text-lg text-light-grey font-semibold"
              :style="{ color: subCardTextColor }"
            >
              {{ subCardText }}
            </p>
          </div>

          <div class="border-b border-slate-800 mb-4 w-3/5 my-4"></div>

          <!-- Contrôles de personnalisation -->
          <div
            class="controls flex flex-col gap-4 mb-4 p-1 rounded-lg w[60%] m-auto"
          >
            <!-- Sélecteur de police d'écriture -->
            <label class="flex flex-col">
              <h3 class="bg-dark-blue2 text-light-grey mb-2">
                Choisis une police d'écriture
              </h3>
              <select
                v-model="selectedFont"
                class="p-2 border border-slate-800 rounded-md bg-dark-blue2"
              >
                <option value="Arial">Arial</option>
                <option value="Courier New">Courier New</option>
                <option value="Georgia">Georgia</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Verdana">Verdana</option>
              </select>
            </label>

            <!-- Sélecteur de couleur de fond -->
            <label class="flex flex-col">
              <h3 class="bg-dark-blue2 text-light-grey mb-2">
                Choisis la couleur du fond
              </h3>
              <input
                type="color"
                v-model="selectedCardBgColor"
                class="h-8 cursor-pointer p-0 border-none"
              />
            </label>

            <!-- Modification du texte de la carte -->
            <label class="flex flex-col">
              <h3 class="bg-dark-blue2 text-light-grey mb-2">
                Configure le texte principal
              </h3>

              <input
                type="text"
                v-model="mainCardText"
                class="p-2 border border-slate-800 rounded-md bg-dark-blue2"
                placeholder="Entrez le texte principal"
              />
            </label>
            <input
              type="color"
              v-model="mainCardTextColor"
              class="h-8 cursor-pointer p-0 border-none"
            />

            <!-- Modification du texte secondaire de la carte -->
            <label class="flex flex-col bg-dark-blue2">
              <h3 class="bg-dark-blue2 text-light-grey mb-2">
                Couleur du texte secondaire
              </h3>

              <input
                type="text"
                v-model="subCardText"
                class="p-2 border border-slate-800 rounded-md bg-dark-blue2"
                placeholder="Entrez le texte secondaire"
              />
            </label>
            <input
              type="color"
              v-model="subCardTextColor"
              class="h-8 cursor-pointer p-0 border-none"
            />
          </div>

          <!-- Carte personnalisable -->
        </div>
      </div>
    </div>

    <!---------------------------------------------------------------------------------------------- -->
    <!-- Bouton Toggle pour la configuration des messages privés des nouveaux membres -->
    <div
      class="welcomeMessage border border-slate-800 rounded-xl bg-dark-blue2"
    >
      <div
        class="welcomeMessageTitle flex w-full justify-between items-center p-4"
      >
        <h2 class="text-lg font-semibold">
          Envoyer un message privé aux nouveaux utilisateurs
        </h2>

        <!-- Bouton toggle personnalisé -->
        <input
          id="cb-toggle-private"
          type="checkbox"
          class="hide-me"
          @change="togglePrivateMessageConfig"
          :checked="isPrivateMessageConfigOpen"
        />
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
    <div
      class="welcomeMessage border border-slate-800 rounded-xl bg-dark-blue2"
    >
      <div
        class="welcomeMessageTitle flex w-full justify-between items-center p-4"
      >
        <h2 class="text-lg font-semibold">
          Attribuer un rôle aux nouveaux utilisateurs
        </h2>

        <!-- Bouton toggle personnalisé -->
        <input
          id="cb-toggle"
          type="checkbox"
          class="hide-me"
          aria-labelledby="cb-label"
          @change="toggleConfigRole"
          :checked="isRoleConfigOpen"
        />
        <label for="cb-toggle" class="toggle"></label>
      </div>

      <!-- Section de configuration des messages de bienvenue -->
      <div v-if="isRoleConfigOpen" class="welcome-config p-4">
        <!-- Rôle d'arrivée -->
        <h3 class="text-light-grey">Rôle d'arrivée</h3>
        <select
          class="rounded-md border bg-dark-blue2 border-slate-800 mb-4 mt-2 pl-3 py-2 pr-24"
        >
          <option value="general">Admin</option>
          <option value="welcome">Modo</option>
          <option value="rules">Membre</option>
        </select>
      </div>
    </div>

    <!---------------------------------------------------------------------------------------------- -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedColor: "#5865F2",
      messageContent:
        "Pour accéder à ce serveur et voir tous les salons, tu dois d'abord prouver que tu es un être humain. Clique sur le bouton ci-dessous pour commencer",
      titleContent: "Vérification",
      footerImage: null,
      anotherImage: null,
      embedImage: null,
      isEditing: false,
      selectedFont: "Arial",
      selectedCardBgColor: "#0000000",
      mainCardText: "Wallbot#000 just joined the server",
      mainCardTextColor: "#ffffff",
      subCardText: "Member #0",
      subCardTextColor: "#999999",
    };
  },
  methods: {
    toggleEdit() {
      this.isEditing = !this.isEditing; // Bascule l'état d'édition
    },
    saveContent() {
      this.isEditing = false; // Sauvegarde le contenu et sort du mode édition
    },
    onImageChange(event, imageType) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this[imageType] = e.target.result; // Définit l'image sélectionnée pour le type spécifique
        };
        reader.readAsDataURL(file); // Lit le fichier sélectionné
      }
    },
    removeImage(imageType) {
      this[imageType] = null; // Supprime l'image sélectionnée pour le type spécifique
    },
  },
};
</script>
<script setup>
import { ref } from "vue";

// États pour chaque section de configuration
const isWelcomeConfigOpen = ref(false);
const isPrivateMessageConfigOpen = ref(false);
const isRoleConfigOpen = ref(false);
const isCaptchaOpen = ref(false);
const isPredefinedDesignConfigOpen = ref(false);
const welcomePublicCard = ref(false);

// Messages pour chaque section
const welcomeMessage = ref("");
const privateMessage = ref("");
const configRole = ref("");
const welcomeCardConfig = ref("");
const predefinedDesignConfig = ref("");

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

const toggleWelcomePublicCard = () => {
  welcomePublicCard.value = !welcomePublicCard.value;
};
</script>

<style scoped>
/* Masque l'input file natif */
.file-upload-wrapper input[type="file"] {
  display: none;
}

.upload-text {
  font-size: 12px;
  color: #6b7280; /* Couleur de texte grise */
}

.captcha-content {
  position: relative; /* Positionnement relatif pour l'élément parent */
}

.edit-icon {
  position: absolute; /* Positionnement absolu pour centrer l'icône */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centrage de l'icône */
  opacity: 0; /* Icône masquée par défaut */
  transition: opacity 0.3s; /* Transition en douceur pour l'effet de survol */
}

.isNotEditing:hover .edit-icon {
  opacity: 1; /* Affiche l'icône au survol */
}

input[type="color"] {
  appearance: none;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
  background: none;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}

input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
  border: none;
}

input[type="color"]::-webkit-color-swatch {
  border: none;
  border-radius: 50%;
}

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
</style>
