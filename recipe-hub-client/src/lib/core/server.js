import { revalidatePath } from "next/cache";
import { getTokenServer } from "../session/session";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
export const serverMution = async (path, data, method) => {
  const token = await getTokenServer();
  const res = await fetch(`${baseUrl}${path}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const serverProtectedFetch = async (path) => {
  const token = await getTokenServer();
  const res = await fetch(`${baseUrl}${path}`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  return await res.json();
};

export const removeServer = async (path, method) => {
  const token = await getTokenServer();
  const res = await fetch(`${baseUrl}${path}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  const deleteRes = await res.json();
  if (deleteRes.status) {
    revalidatePath("/dashboard/user/my-recipes");
  }
  return deleteRes;
};

export const serverFetch = async (path) => {
  const res = await fetch(`${baseUrl}${path}`);
  const data = await res.json();
  return data || [];
};
