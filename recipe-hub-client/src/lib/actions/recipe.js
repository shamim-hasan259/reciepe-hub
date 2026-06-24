"use server";

import { serverMution, removeServer } from "../core/server";

export const addRecipe = async (data) => {
  return await serverMution("/api/recipes", data, "POST");
};

export const updateRecipe = async (id, newData) => {
  return await serverMution(`/api/updaterecipe/${id}`, newData, "PATCH");
};

export const deleteRecipe = async (id) => {
  return await removeServer(`/api/deletercipe/${id}`, "DELETE");
};
