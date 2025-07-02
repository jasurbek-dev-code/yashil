import { useMutation } from '@tanstack/react-query';
import apiClient from '../lib/apiClient';

export function usePostData(endpoint) {
  return useMutation({
    mutationFn: async (data) => {
      const response = await apiClient.post(endpoint, data);
      return response.data;
    },
  });
}
