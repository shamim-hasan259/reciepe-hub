"use server";

import { serverMution } from "../core/server";

export const addRecipe = async (data) => {
  return await serverMution("/api/recipes", data, "POST");
};

export const updateuserAddrecipeLimit = async (id) => {
  return await serverMution(`/api/user/${id}`, {}, "PATCH");
};
