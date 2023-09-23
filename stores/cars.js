import { defineStore } from "pinia";

export const useCarsStore = defineStore({
  id: "cars-store",

  state: () => {
    return {
      recomendation_cars: [],
      last_page: 0,
      popular_cars: [],
      current_car: null,
    };
  },

  actions: {
    async getPopularCars() {
      const data = await $fetch(`/api/fake-cars?type=popular`);
      this.popular_cars = data.cars;
    },
    async getRecomendationCars(page, q) {
      if (page === 1) this.recomendation_cars = [];
      const data = await $fetch(
        `/api/fake-cars?type=recomendation&page=${page}&q=${q}`
      );
      this.recomendation_cars = this.recomendation_cars.concat(data.cars.data);
      this.last_page = data.cars.meta.last_page;
    },
    async getCar(slug) {
      this.current_car = null;
      const data = await $fetch(`/api/fake-cars?slug=${slug}`);
      this.current_car = data.car;
    },
  },
});
