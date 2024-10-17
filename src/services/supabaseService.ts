import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabaseService = {
  get: async <T>(
    table: string,
    select: string = '*',
    signal?: AbortSignal
  ): Promise<T[]> => {
    const response = await axios.get(
      `${BASE_URL}/rest/v1/${table}?select=${select}`,
      {
        headers: {
          apikey: API_KEY,
        },
        signal: signal,
      }
    );
    return response.data;
  },
  post: async <T>(table: string, data: T): Promise<T> => {
    const response = await axios.post(`${BASE_URL}/rest/v1/${table}`, data, {
      headers: {
        apikey: API_KEY,
      },
    });
    return response.data[0];
  },
  put: async <T>(table: string, id: string, data: T): Promise<T> => {
    const response = await axios.put(
      `${BASE_URL}/rest/v1/${table}?id=eq.${id}`,
      data,
      {
        headers: {
          apikey: API_KEY,
        },
      }
    );
    return response.data[0];
  },
  delete: async (
    table: string,
    id: string,
    column: string = 'id'
  ): Promise<void> => {
    await axios.delete(`${BASE_URL}/rest/v1/${table}?${column}=eq.${id}`, {
      headers: {
        apikey: API_KEY,
      },
    });
  },
};
