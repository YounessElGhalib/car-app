<template>
  <div
    class="w-full h-32 bg-white flex items-center justify-between px-16 fixed z-50"
  >
    <NuxtLink to="/"
      ><h1 class="text-blue-600 font-extrabold text-[32px] cursor-pointer">DM</h1></NuxtLink
    >
    <div class="relative w-2/3 flex items-center">
      <input
        placeholder="Search something here"
        class="border border-gray-500 py-3 pl-14 rounded-full w-full text-sm"
        v-model="sreach"
      />
      <MagnifyingGlassIcon class="h-6 w-6 text-gray-500 absolute left-4" />
    </div>
    <div
      class="w-8 h-8 rounded-full border border-gray-500 flex justify-center items-center cursor-pointer"
    >
      <HeartIcon class="h-4 w-4 text-gray-500" />
    </div>
  </div>
</template>

<script setup lang="ts">
// Icons
import { MagnifyingGlassIcon, HeartIcon } from "@heroicons/vue/24/solid";
import { storeToRefs } from "pinia";
// components
import CarCard from "./components/CarCard.vue";
import NavBar from "./components/NavBar.vue";
// stores
import { useCarsStore } from "@/stores/cars";

const sreach = ref("");
const carsStore = useCarsStore();
const { cars } = storeToRefs(carsStore);

watch(
  () => sreach.value,
  () => {
    carsStore.getRecomendationCars(1, sreach.value);
  }
);
</script>

<style>
</style>