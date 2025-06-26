import axios from 'axios';

const apiClient = axios.create({
  baseURL: "http://vaziyat.technocorp.uz/api", 
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

export default apiClient;
