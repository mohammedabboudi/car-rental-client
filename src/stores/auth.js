import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({ 
    authenticated: false,
    accessToken: '' 
}),
  getters: {
    isAuthenticated(state) {
      return state.authenticated;
    },
    getAccessToken(state) {
      return state.accessToken;
    },
  },
  actions: {
    setAccessToken(token) {
      this.accessToken = token;
      this.authenticated = true;
    },
    clearAccessToken() {
      this.accessToken = '';
      this.authenticated = false;
    },
  },
  persist: {
    enabled: true
  }
});
