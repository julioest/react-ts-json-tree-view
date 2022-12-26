import { FetchAPIProps } from "../types";

export async function fetchAPI({
  endpoint,
  method = 'GET',
}: FetchAPIProps) {
  const response = await fetch(endpoint, {
    method: method.toUpperCase(),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) throw new Error(response.statusText)
  
  return response;
}
