<template>
  <div class="bg-gray-200 h-full">
    <NavBar />
    <div class="w-[1400px] m-auto pb-8 pt-40">
      <NuxtPage />
      <div class="font-semibold text-[#90A3BF] py-8">Recomendation Car</div>
      <div class="flex items-center justify-center">
        <div
          class="w-full flex flex-wrap justify-between"
          v-if="recomendation_cars.length"
        >
          <CarCard v-for="car in recomendation_cars" :key="car" :car="car" />
        </div>
        <div v-else class="flex justify-center"><Loader /></div>
      </div>
      <div class="flex justify-center">
        <button
          class="btn btn-primary my-14 m-auto"
          v-if="last_page != current_page"
          @click="ShowMore()"
        >
          Show more car
        </button>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
// components
import CarCard from "./components/CarCard.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import Loader from "./components/UI/Loader.vue";
// stores
import { useCarsStore } from "@/stores/cars";

const current_page = ref(1);
const carsStore = useCarsStore();
const { recomendation_cars, last_page } = storeToRefs(carsStore);

onMounted(async () => {
  carsStore.getRecomendationCars(current_page.value, "");
});

function ShowMore() {
  current_page.value += 1;
  carsStore.getRecomendationCars(current_page.value, "");
}
</script>

