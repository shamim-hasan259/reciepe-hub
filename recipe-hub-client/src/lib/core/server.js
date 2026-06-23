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

export const serverFetch = async (path) => {
  const res = await fetch(`${baseUrl}${path}`);
  const data = await res.json();
  return data || [];
};
