import { serverProtectedFetch } from "../core/server";

export const getSingleRecipeAdmin = async (id) => {
  return await serverProtectedFetch(`/api/singlerecipe/admin/${id}`);
};
