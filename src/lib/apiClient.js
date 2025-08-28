import axios from 'axios';

const apiClient = axios.create({
  baseURL: "https://yashilloyiha.uz/api",
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true
});

// Request interceptor orqali Accept-Language qo‘shish
apiClient.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const language = localStorage.getItem("i18nextLng") || "uz";
      config.headers['Accept-Language'] = language;
    } else {
      config.headers['Accept-Language'] = "uz"; // SSR holatda default
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Javob interceptor (agar kerak bo‘lsa)
apiClient.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

export default apiClient;
