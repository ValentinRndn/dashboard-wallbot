<template>
  <div class="analysis ">

    <!-- Statistics container -->
<div class="statistics-container flex flex-wrap row-wrap justify-between my-10">
  
    <!-- Statistic Arrival -->
<div class="statistic-arrival flex gap-10 border border-slate-800 rounded-xl p-4 md:gap-0">
  <div class="content">
  <h2>Nombre d'arrivées</h2>
  <p class="text-light-grey"><span class="text-2xl font-bold text-white mr-2">100</span>+10% depuis le mois dernier</p>
</div>
<div class="icon flex flex-col items-center align-center rounded-xl p-4 bg-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#020817" d="M18 11h-2q-.425 0-.712-.288T15 10t.288-.712T16 9h2V7q0-.425.288-.712T19 6t.713.288T20 7v2h2q.425 0 .713.288T23 10t-.288.713T22 11h-2v2q0 .425-.288.713T19 14t-.712-.288T18 13zm-9 1q-1.65 0-2.825-1.175T5 8t1.175-2.825T9 4t2.825 1.175T13 8t-1.175 2.825T9 12m-8 6v-.8q0-.85.438-1.562T2.6 14.55q1.55-.775 3.15-1.162T9 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T17 17.2v.8q0 .825-.587 1.413T15 20H3q-.825 0-1.412-.587T1 18"/></svg>
</div>
</div>

    <!-- Statistic Leave -->
<div class="statistic-leave flex gap-10 border border-slate-800 rounded-xl p-4">
  <div class="content">
  <h2>Nombre de départs</h2>
  <p class="text-light-grey"><span class="text-2xl font-bold text-white mr-2">100</span>+10% depuis le mois dernier</p>
</div>
<div class="icon flex flex-col items-center align-center rounded-xl p-4 bg-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#020817" d="M17.4 13L16 11.6l2.075-2.1L16 7.425L17.4 6l2.1 2.1L21.575 6L23 7.425L20.9 9.5l2.1 2.1l-1.425 1.4l-2.075-2.075zM9 12q-1.65 0-2.825-1.175T5 8t1.175-2.825T9 4t2.825 1.175T13 8t-1.175 2.825T9 12m-8 8v-2.8q0-.85.438-1.562T2.6 14.55q1.55-.775 3.15-1.162T9 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T17 17.2V20z"/></svg></div>
</div>

    <!-- Statistic Messages sended -->
<div class="statistic-message flex gap-10 border border-slate-800 rounded-xl p-4">
  <div class="content">
  <h2>Nombre de messages</h2>
  <p class="text-light-grey"><span class="text-2xl font-bold text-white mr-2">100</span>+10% depuis le mois dernier</p>
</div>
<div class="icon flex flex-col items-center align-center rounded-xl p-4 bg-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#020817" d="M2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6zm4-8h8v-2H6zm0-3h12V9H6zm0-3h12V6H6z"/></svg></div>
</div>

    <!-- Statistic Interaction -->
<div class="statistic-interaction flex gap-10 border border-slate-800 rounded-xl p-4">
  <div class="content">
  <h2>Nombre d'intéractions</h2>
  <p class="text-light-grey"><span class="text-2xl font-bold text-white mr-2">100</span>+10% depuis le mois dernier</p>
</div>
<div class="icon flex flex-col items-center align-center rounded-xl p-4 bg-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#020817" d="M11.7 18q-2.4-.125-4.05-1.85T6 12q0-2.5 1.75-4.25T12 6q2.425 0 4.15 1.65T18 11.7l-2.1-.625q-.325-1.35-1.4-2.212T12 8q-1.65 0-2.825 1.175T8 12q0 1.425.863 2.5t2.212 1.4zm1.2 3.95q-.225.05-.45.05H12q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12v.45q0 .225-.05.45L20 12.3V12q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20h.3zm7.625.55l-4.275-4.275L15 22l-3-10l10 3l-3.775 1.25l4.275 4.275z"/></svg></div>
</div>
</div>


    <!-- Conteneur inférieur -->
    <div class="bottom-container flex-wrap">
      <div class="flex gap-10">
        <div class="member-flow flex-1 border border-slate-800 rounded-xl p-4">
          <div class="member-flow-left">
            <h1 class="font-semibold text-xl">Flux de membres</h1>
            <p class="text-light-grey">Affiche le nombre de membres ayant rejoint / quitté le serveur</p>
            <!-- Menu déroulant pour sélectionner la période -->
            <select v-model="selectedPeriod" class="mt-4 p-2 border border-slate-800 rounded bg-dark-blue">
              <option value="7">Derniers 7 jours</option>
              <option value="30">Derniers 30 jours</option>
              <option value="90">Derniers 90 jours</option>
            </select>
            <!-- Canvas pour le graphique -->
            <canvas id="memberChart" class="mt-4"></canvas>
          </div>

        </div>
        <!-- Div pour le classement -->
        <div class="ranking flex-1 border border-slate-800 rounded-xl p-4">
          <div class="top-content flex justify-between items-center mb-8">
            <div class="left-top">
              <h1 class="font-semibold text-xl">Classement</h1>
              <p class="text-light-grey">Le top des membres du classement</p>
            </div>
            <div class="right-top bg-blue text-dark-blue font-semibold rounded-xl p-2 flex items-center align-center  transition-transform duration-300 hover:scale-105 cursor-pointer">
              <p class="">Voir toute la liste</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z"/></svg>            </div>
          </div>

          <!-- En-tête du tableau de classement -->
          <div class="ranking-info flex justify-between items-center text-light-grey mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-4" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M216 96a88 88 0 1 0-144 67.83V240a8 8 0 0 0 11.58 7.16L128 225l44.43 22.21a8.1 8.1 0 0 0 3.57.79a8 8 0 0 0 8-8v-76.17A87.85 87.85 0 0 0 216 96M56 96a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72m112 131.06l-36.43-18.21a8 8 0 0 0-7.16 0L88 227.06v-52.69a87.89 87.89 0 0 0 80 0ZM128 152a56 56 0 1 0-56-56a56.06 56.06 0 0 0 56 56m0-96a40 40 0 1 1-40 40a40 40 0 0 1 40-40"/></svg>
            <p class="flex-1 font-semibold">Membre</p>
            <p class="w-32 text-center font-semibold">Rôle</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-24 text-right" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6zm4-8h8v-2H6zm0-3h12V9H6zm0-3h12V6H6z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-24 text-right" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 8l3 5.2l3-2.7l-.7 3.5H6.7L6 10.5l3 2.7zm0-4l-3.5 6L3 5l2 11h14l2-11l-5.5 5zm7 14H5v1c0 .6.4 1 1 1h12c.6 0 1-.4 1-1z"/></svg>
          </div>

          <!-- Barre grise sous ranking-info -->
          <div class="border-b border-slate-800 mb-4"></div>

          <!-- Liste des membres -->
          <div v-for="(member, index) in members" :key="index" class="member flex items-center my-2 mb-6">
            <!-- Position -->
            <div class="w-6 text-center">{{ index + 1 }}</div>
            <!-- Photo de profil et pseudo -->
            <div class="flex items-center flex-1">
              <img :src="member.avatar" alt="PP" class="w-10 h-10 rounded-full mr-2" />
              <div class="flex-1">
                <span class="font-semibold text-white">{{ member.username }}</span>
                <!-- Barre de progression -->
                <div class="w-full bg-dark-progress rounded-full h-2.5 mt-1">
                  <div
                    class="bg-blue h-2.5 rounded-full"
                    :style="{ width: member.progress + '%' }"
                  ></div>
                </div>
              </div>
            </div>
            <!-- Rôle -->
            <div class="w-48 text-center">
  <span class="text-sm text-dark-blue font-semibold bg-blue px-3 py-1 rounded-xl">
    {{ member.role }}
  </span>
</div>
            <!-- Nombre de messages -->
            <div class="w-24  text-white">{{ member.messages }}</div>
            <!-- Nombre de points -->
            <div class="w-16 text-white">{{ member.points }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, watch } from 'vue';
import { Chart } from 'chart.js/auto';

export default {
  name: 'Analysis',

  setup() {
        // Exemple de données de classement
        const members = ref([
      {
        username: 'Alice',
        avatar: 'https://via.placeholder.com/40',
        role: 'Admin',
        progress: 70,
        messages: 120,
        points: 3000,
      },
      {
        username: 'Bob',
        avatar: 'https://via.placeholder.com/40',
        role: 'Member',
        progress: 50,
        messages: 80,
        points: 2000,
      },
      {
        username: 'Charlie',
        avatar: 'https://via.placeholder.com/40',
        role: 'Member',
        progress: 30,
        messages: 40,
        points: 1000,
      },
      {
        username: 'John',
        avatar: 'https://via.placeholder.com/40',
        role: 'Member',
        progress: 50,
        messages: 80,
        points: 2000,
      },
      {
        username: 'Jack',
        avatar: 'https://via.placeholder.com/40',
        role: 'Member',
        progress: 50,
        messages: 80,
        points: 2000,
      },
      
      // Ajoutez plus de membres ici
    ]);


    const selectedPeriod = ref('7');
    const memberChart = ref(null);

    const updateChart = () => {
      const data = getDataForPeriod(selectedPeriod.value);

      if (memberChart.value) {
        memberChart.value.data.labels = data.labels;
        memberChart.value.data.datasets[0].data = data.arrivals;
        memberChart.value.data.datasets[1].data = data.leaves;
        memberChart.value.update();
      }
    };

    const getDataForPeriod = (period) => {
      const labels = Array.from({ length: period }, (_, i) => `Jour ${i + 1}`);
      const arrivals = Array.from({ length: period }, () => Math.floor(Math.random() * 10));
      const leaves = Array.from({ length: period }, () => Math.floor(Math.random() * 10));
      return { labels, arrivals, leaves };
    };

    onMounted(() => {
      const ctx = document.getElementById('memberChart').getContext('2d');

      // Crée des dégradés pour chaque courbe
      const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
      gradient1.addColorStop(1, 'rgba(66, 135, 245, 0)'); // Couleur plus claire en haut
      gradient1.addColorStop(0, 'rgba(66, 135, 245, 0.4)'); // Transparente en bas

      const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
      gradient2.addColorStop(1, 'rgba(66, 66, 245, 0)'); // Couleur plus sombre en haut
      gradient2.addColorStop(0, 'rgba(66, 66, 245, 0.4)'); // Transparente en bas

      const initialData = getDataForPeriod(selectedPeriod.value);
      memberChart.value = new Chart(ctx, {
        type: 'line',
        data: {
          labels: initialData.labels,
          datasets: [
            {
              label: 'Arrivées',
              data: initialData.arrivals,
              borderColor: 'rgba(66, 135, 245, 1)', // Bleu clair
              backgroundColor: gradient1,
              borderWidth: 2,
              tension: 0.4, // Arrondir la courbe
              fill: true, // Remplir sous la courbe
            },
            {
              label: 'Départs',
              data: initialData.leaves,
              borderColor: 'rgba(66, 66, 245, 1)', // Bleu plus foncé
              backgroundColor: gradient2,
              borderWidth: 2,
              tension: 0.4, // Arrondir la courbe
              fill: true, // Remplir sous la courbe
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              labels: {
                font: {
                  size: 14, // Augmente la taille de la police pour la légende
                },
                usePointStyle: true, // Utilise le style de point pour la légende
                padding: 20, // Ajoute de l'espace autour de la légende
              },
              onHover: function (event, legendItem) {
                document.getElementById('memberChart').style.cursor = 'pointer'; // Change le curseur au survol
              },
              onLeave: function () {
                document.getElementById('memberChart').style.cursor = 'default'; // Réinitialise le curseur
              },
            },
            tooltip: {
              enabled: true,
              mode: 'index',
              intersect: false,
            },
          },
          scales: {
            x: { display: true, title: { display: true, text: 'Jour' } },
            y: { display: true, title: { display: true, text: 'Nombre' } },
          },
        },
      });
    });

    watch(selectedPeriod, updateChart);

    return {
      selectedPeriod,
    members,
    };
  },
};
</script>

<style scoped>
</style>