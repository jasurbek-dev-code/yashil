import { useQuery } from '@tanstack/react-query';
import apiClient from '../lib/apiClient';

export function useFetchData(key, endpoint) {
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      const response = await apiClient.get(endpoint);
      return response.data;
    },
  });
}
