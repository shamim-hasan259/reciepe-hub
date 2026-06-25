import { serverProtectedFetch } from "../core/server";

export const getFavouriteRecipe = async () => {
  return await serverProtectedFetch("/api/get/favourite");
};
