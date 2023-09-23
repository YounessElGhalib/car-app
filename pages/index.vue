<template>
  <div>
    <Header />
    <div class="font-semibold text-[#90A3BF] py-8">Popular Car</div>
    <div class="flex flex-wrap justify-between" v-if="popular_cars.length">
      <CarCard v-for="car in popular_cars" :key="car" :car="car" />
    </div>
    <div v-else class="flex justify-center">
      <Loader />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
// components
import Header from "@/components/Header.vue";
import CarCard from "@/components/CarCard.vue";
import Loader from "@/components/UI/Loader.vue";
// stores
import { useCarsStore } from "@/stores/cars";

const carsStore = useCarsStore();
const { popular_cars } = storeToRefs(carsStore);

onMounted(async () => {
  carsStore.getPopularCars();
});
</script>

<style>
</style>