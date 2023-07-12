import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      },
    }
  ]
})

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore()
  if (
    // 检查用户是否已登录
    !authStore.hasLoggedIn && to.name !== 'login'
  ) {
    // 将用户重定向到登录页面
    return { name: 'login' }
  }
})

export default router
