"use server";
import { serverMution } from "../core/server";
export const postReprtRecipe = async (report) => {
  return await serverMution("/api/recipe/report", report, "POST");
};
