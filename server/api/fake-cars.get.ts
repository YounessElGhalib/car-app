import fakerCars from "../lib/faker";

export default defineEventHandler(async (event) => {
  const { getCars, getPopularCars, getCarById } = fakerCars();
  const { type, page, q, slug } = getQuery(event);

  const cars =
    type === "recomendation" ? await getCars(page, q) : await getPopularCars();

  const car = await getCarById(slug);
  return { cars, car };
});
