import axios from 'axios';
import { useAuthStore } from '@/stores/auth';

axios.defaults.baseURL =  'http://localhost:5000/';

axios.interceptors.request.use((config) => {
    const authStore = useAuthStore();
    config.headers.Authorization = `Bearer ${authStore.getAccessToken}`;
    config.headers.Accept = "application/json";
    return config
})


axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log('the interceptor is working.....');
    const authStore = useAuthStore();
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await axios.get('auth/refresh', { withCredentials: true });

        authStore.setAccessToken(response.data.accessToken);
        return axios(originalRequest);
        
      } catch (error) {
        authStore.clearAccessToken();

        // Redirect to the login page
        router.push('/signin');
      }
    }

    return Promise.reject(error);
  }
);

