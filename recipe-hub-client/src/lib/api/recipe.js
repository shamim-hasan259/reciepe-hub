import { serverFetch, serverProtectedFetch } from "../core/server";

export const findRecipe = async (userId) => {
  return await serverProtectedFetch(`/api/recipes?userId=${userId}`);
};

export const singleRecipeFetch = async (id) => {
  return await serverProtectedFetch(`/api/singlerecipe/${id}`);
};
