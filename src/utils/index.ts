import { fetchJSONProps } from "../types";

export async function fetchJSON({
  endpoint,
  method = 'GET',
}: fetchJSONProps): Promise<Response> {
  const response = await fetch(endpoint, {
    method: method.toUpperCase(),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response;
}
