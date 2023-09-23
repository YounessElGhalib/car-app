<template>
  <NuxtLink :to="`/${car.id}`">
    <div
      class="bg-white rounded-md p-6 w-[320px] mb-8 shadow-md hover:shadow-lg cursor-pointer"
    >
      <div class="flex items-stretch justify-between">
        <div>
          <p class="font-bold text-xl text-[#1A202C]">{{ car.name }}</p>
          <span class="fint-bold text-[#90A3BF] text-sm">{{ car.type }}</span>
        </div>
        <HeartOutlineIcon
          v-if="!loved"
          class="h-6 w-6 text-gray-500"
          @click.self="loved = true"
        />
        <HeartIcon
          v-else
          class="h-6 w-6 text-red-500"
          @click.self="loved = false"
        />
      </div>
      <div
        class="m-auto w-full h-[200px] bg-no-repeat bg-contain bg-center"
        :style="`background-image: url(${car.img})`"
      ></div>
      <div style="box-shadow: -0px -50px 40px 20px #ffffff"></div>
      <div
        class="w-full font-medium text-sm text-[#90A3BF] flex items-center justify-between mb-6"
      >
        <div class="flex items-center space-x-1">
          <GasStationIcon />
          <p>{{ car.gasolineLiter }}L</p>
        </div>
        <div class="flex items-center space-x-1">
          <CarIcon />
          <p>{{ car.kindOfTransition }}</p>
        </div>
        <div class="flex items-center space-x-1">
          <ProfileIcon />
          <p>{{ car.people }} People</p>
        </div>
      </div>
      <div class="w-full flex items-center justify-between">
        <div class="text-xl text-[#1A202C] font-bold">
          ${{ car.pricePerDay }}/<span
            class="font-medium text-sm text-[#90A3BF]"
          >
            day</span
          >
        </div>
        <button class="btn btn-primary">Rent Now</button>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
// Icons
import { HeartIcon } from "@heroicons/vue/24/solid";
import { HeartIcon as HeartOutlineIcon } from "@heroicons/vue/24/outline";
import CarIcon from "@/components/UI/Icons/CarIcon.vue";
import GasStationIcon from "@/components/UI/Icons/GasStationIcon.vue";
import ProfileIcon from "@/components/UI/Icons/ProfileIcon.vue";

const props = defineProps({
  car: { type: Object, required: true },
});

const loved = ref(false);
</script>

<style>
</style>