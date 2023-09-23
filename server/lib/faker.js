export default function fakerCars() {
  async function getPopularCars() {
    const data = await $fetch(
      `https://dm-assignment-commonshare.koyeb.app/api/cars/popular`
    );
    return data;
  }

  async function getCars(page = 1, q = "") {
    const data = await $fetch(
      `https://dm-assignment-commonshare.koyeb.app/api/cars?page=${page}&q=${q}`
    );
    return data;
  }

  async function getCarById(slug) {
    const data = await $fetch(
      `https://dm-assignment-commonshare.koyeb.app/api/cars/${slug}`
    );
    return data;
  }

  return {
    getCars,
    getPopularCars,
    getCarById,
  };
}
