<template>
  <div v-if="current_car != null" class="flex items-start justify-between">
    <div class="w-[492px] self-stretch">
      <div class="w-full h-[360px] rounded-lg bg-[#3563e9] p-6">
        <h1 class="text-white text-[32px] font-semibold">
          Sports car with the best<br />
          design and acceleration
        </h1>
        <p class="text-white font-medium">
          Safety and comfort while driving a<br />
          futuristic and elegant sports car
        </p>
        <div
          class="mx-auto w-[90%] h-[200px] bg-no-repeat bg-contain bg-center"
          :style="`background-image: url(${current_car.img})`"
        ></div>
      </div>
      <div class="flex items-center justify-between mt-8">
        <div
          class="w-[148px] h-[124px] bg-no-repeat bg-contain bg-center rounded-lg bg-[#3563e9]"
          :style="`background-image: url(${current_car.img})`"
        ></div>
        <div
          class="mx-auto w-[148px] h-[124px] bg-no-repeat bg-cover bg-center rounded-lg"
          :style="`background-image: url(${current_car.images[0].url})`"
        ></div>
        <div
          class="mx-auto w-[148px] h-[124px] bg-no-repeat bg-cover bg-center rounded-lg"
          :style="`background-image: url(${current_car.images[1].url})`"
        ></div>
      </div>
    </div>
    <div class="w-[788px] bg-white rounded-lg p-6 self-stretch">
      <div class="flex items-center space-x-4">
        <h1 class="text-[#1A202C] text-[32px] font-bold">
          {{ current_car.name }}
        </h1>
        <HeartIcon
          v-if="loved"
          class="h-6 w-6 text-red-500 cursor-pointer"
          @click="loved = true"
        />
        <HeartOutlineIcon
          v-else
          class="h-6 w-6 text-gray-500 cursor-pointer"
          @click="loved = false"
        />
      </div>
      <div class="flex items-center space-x-1">
        <StarIcon v-for="i in 4" :key="i" class="w-4 h-4 text-[#FBAD39]" />
        <StarOutlineIcon class="w-4 h-4 text-[#90A3BF]" />
        <span class="text-sm font-medium text-[#596780]">440+ Reviewer</span>
      </div>
      <div class="text-[#596780] text-xl py-8">
        {{ current_car.description }}
      </div>
      <div class="flex flex-wrap items-center">
        <div class="w-1/3 flex items-center space-x-4 text-xl mt-4">
          <p class="key">Type Car</p>
          <p class="val">{{ current_car.type }}</p>
        </div>
        <div class="w-1/3 flex items-center space-x-4 text-xl mt-4">
          <p class="key">Capacity</p>
          <p class="val">{{ current_car.people }} Person</p>
        </div>
        <div class="w-1/3 flex items-center space-x-4 text-xl mt-4">
          <p class="key">Gasoline</p>
          <p class="val">{{ current_car.gasolineLiter }}L</p>
        </div>
        <div class="w-1/3 flex items-center space-x-4 text-xl mt-4">
          <p class="key">Steering</p>
          <p class="val">{{ current_car.kindOfTransition }}</p>
        </div>
      </div>
      <div class="flex items-center justify-between font-bold mt-20">
        <div class="flex items-baseline text-[32px] text-[#1A202C]">
          ${{ current_car.pricePerDay }}.00/
          <p class="text-base text-[#90A3BF]">days</p>
        </div>
        <button class="btn btn-primary">Rent Now</button>
      </div>
    </div>
  </div>
  <div v-else class="flex justify-center">
    <Loader />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
//Icons
import { StarIcon } from "@heroicons/vue/24/solid";
import { StarIcon as StarOutlineIcon } from "@heroicons/vue/24/outline";
import { HeartIcon } from "@heroicons/vue/24/solid";
import { HeartIcon as HeartOutlineIcon } from "@heroicons/vue/24/outline";
//components
import Loader from "@/components/UI/Loader.vue";
// stores
import { useCarsStore } from "@/stores/cars";

const route = useRoute();
const loved = ref(false);

const carsStore = useCarsStore();
const { current_car } = storeToRefs(carsStore);

onMounted(() => {
  carsStore.getCar(route.params.slug);
});
</script>

<style lang="scss" scoped>
.key {
  @apply text-[#90A3BF];
}
.val {
  @apply text-[#596780] font-semibold;
}
</style>