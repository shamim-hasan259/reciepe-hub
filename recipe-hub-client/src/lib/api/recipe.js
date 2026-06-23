import { serverFetch } from "../core/server";

export const findRecipe = async (userId) => {
  return await serverFetch(`/api/recipes?userId=${userId}`);
};
