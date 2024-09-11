<template>
  <div class="analysis ">

    <!-- Statistics container -->
<div class="statistics-container flex justify-between my-10">
  
    <!-- Statistic Arrival -->
<div class="statistic-arrival flex gap-10 border border-light-grey rounded-xl p-4">
  <div class="content">
  <h2>Nombre d'arrivées</h2>
  <p class="text-light-grey"><span class="text-2xl font-bold text-white mr-2">100</span>+10% depuis le mois dernier</p>
</div>
<div class="icon flex flex-col items-center align-center rounded-xl p-4 bg-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 11h-2q-.425 0-.712-.288T15 10t.288-.712T16 9h2V7q0-.425.288-.712T19 6t.713.288T20 7v2h2q.425 0 .713.288T23 10t-.288.713T22 11h-2v2q0 .425-.288.713T19 14t-.712-.288T18 13zm-9 1q-1.65 0-2.825-1.175T5 8t1.175-2.825T9 4t2.825 1.175T13 8t-1.175 2.825T9 12m-8 6v-.8q0-.85.438-1.562T2.6 14.55q1.55-.775 3.15-1.162T9 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T17 17.2v.8q0 .825-.587 1.413T15 20H3q-.825 0-1.412-.587T1 18"/></svg>
</div>
</div>

    <!-- Statistic Leave -->
<div class="statistic-leave flex gap-10 border border-light-grey rounded-xl p-4">
  <div class="content">
  <h2>Nombre d'arrivées</h2>
  <p class="text-light-grey"><span class="text-2xl font-bold text-white mr-2">100</span>+10% depuis le mois dernier</p>
</div>
<div class="icon flex flex-col items-center align-center rounded-xl p-4 bg-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.4 13L16 11.6l2.075-2.1L16 7.425L17.4 6l2.1 2.1L21.575 6L23 7.425L20.9 9.5l2.1 2.1l-1.425 1.4l-2.075-2.075zM9 12q-1.65 0-2.825-1.175T5 8t1.175-2.825T9 4t2.825 1.175T13 8t-1.175 2.825T9 12m-8 8v-2.8q0-.85.438-1.562T2.6 14.55q1.55-.775 3.15-1.162T9 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T17 17.2V20z"/></svg></div>
</div>

    <!-- Statistic Messages sended -->
<div class="statistic-message flex gap-10 border border-light-grey rounded-xl p-4">
  <div class="content">
  <h2>Nombre d'arrivées</h2>
  <p class="text-light-grey"><span class="text-2xl font-bold text-white mr-2">100</span>+10% depuis le mois dernier</p>
</div>
<div class="icon flex flex-col items-center align-center rounded-xl p-4 bg-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6zm4-8h8v-2H6zm0-3h12V9H6zm0-3h12V6H6z"/></svg></div>
</div>

    <!-- Statistic Interaction -->
<div class="statistic-interaction flex gap-10 border border-light-grey rounded-xl p-4">
  <div class="content">
  <h2>Nombre d'arrivées</h2>
  <p class="text-light-grey"><span class="text-2xl font-bold text-white mr-2">100</span>+10% depuis le mois dernier</p>
</div>
<div class="icon flex flex-col items-center align-center rounded-xl p-4 bg-blue">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M7 7.997h-.824c-1.497 0-2.246 0-2.71-.44C3 7.12 3 6.413 3 5s0-2.12.465-2.558c.465-.439 1.214-.439 2.711-.439h11.647c1.498 0 2.247 0 2.712.439S21 3.586 21 4.999s0 2.12-.465 2.559s-1.214.439-2.712.439H16.5"/><path d="M18.03 21.992c-.05-1.714.09-1.94.221-2.32c.132-.382.947-1.735 1.273-2.718c1.052-3.178.247-3.715-1.014-4.68c-1.444-1.107-3.89-1.67-5.415-1.548v-4.09c0-.863-.826-1.614-1.752-1.614s-1.746.751-1.746 1.614v7.752L7.626 12.71c-.532-.537-1.383-.488-2-.081a1.27 1.27 0 0 0-.445.511c-.28.589-.2 1.255.242 1.8l1.12 1.445m2.985 5.613v-.946c.073-1.163-.983-2.096-2.106-3.535m0 0c-.081-.104.076.097 0 0m0 0c-.34-.43-.61-.808-.878-1.132m.878 1.132l1.107 1.354m-1.107-1.354l-.878-1.132"/></g></svg></div>
</div>
</div>


    <!-- Conteneur inférieur -->
    <div class="bottom-container">
      <div class="flex gap-10">
        <div class="member-flow flex flex-1 border border-light-grey rounded-xl p-4">
          <div class="member-flow-left w-full h-full">
            <h1 class="font-semibold text-xl">Flux de membres</h1>
            <p class="text-light-grey">Affiche le nombre de membres ayant rejoint / quitter le serveur</p>
            <!-- Menu déroulant pour sélectionner la période -->
            <select v-model="selectedPeriod" class="mt-4 p-2 border border-light-grey rounded bg-dark-blue">
              <option value="7">Derniers 7 jours</option>
              <option value="30">Derniers 30 jours</option>
              <option value="90">Derniers 90 jours</option>
            </select>
            <!-- Canvas pour le graphique -->
            <canvas id="memberChart" class="mt-4 w-full h-full"></canvas>
          </div>

        </div>

        <div class="ranking flex-1 border border-light-grey rounded-xl p-4">
          <h1 class="font-semibold text-xl">Classement</h1>
          <p class="text-light-grey">Le top des membres du classement</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, watch } from 'vue';
import { Chart } from 'chart.js/auto';

export default {
  setup() {
    const selectedPeriod = ref('7');
    const memberChart = ref(null);

    // Fonction pour mettre à jour le graphique en fonction de la période sélectionnée
    const updateChart = () => {
      const data = getDataForPeriod(selectedPeriod.value);

      if (memberChart.value) {
        memberChart.value.data.labels = data.labels;
        memberChart.value.data.datasets[0].data = data.arrivals;
        memberChart.value.data.datasets[1].data = data.leaves;
        memberChart.value.update();
      }
    };

    // Fonction pour obtenir les données pour la période sélectionnée
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
    };
  },
};
</script>

<style scoped>
</style>