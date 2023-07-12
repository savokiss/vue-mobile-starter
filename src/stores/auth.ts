import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: '',
    expire: ''
  }),
  getters: {
    hasLoggedIn: (state) => !!state.token
  },
  actions: {
    login(info: { token: string, expire: string }) {
      this.token = info.token
      this.expire = info.expire
    },
    logout() {
      this.token = ''
      this.expire = ''
    }
  },
  persist: true
})
