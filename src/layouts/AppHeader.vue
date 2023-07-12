<template>
  <div class="flex justify-between items-center px-4 py-4 border-b border-gray-200">
    <h1 class="text-2xl font-bold">{{ websiteConfig.title }}</h1>
    <div class="profile">
      <n-dropdown :options="profileOptions" @select="onProfileSelect">
        <n-avatar
          round
          size="large"
          src="/default-avatar.jpg"
        />
      </n-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { websiteConfig } from '@/config/website.config'
import { useAuthStore } from '@/stores/auth'
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon
} from '@vicons/ionicons5'
import { renderIcon } from '@/utils/icons'

const router = useRouter()
const authStore = useAuthStore()

const profileOptions = [
  // {
  //   label: '用户资料',
  //   key: 'profile',
  //   icon: renderIcon(UserIcon)
  // },
  {
    label: '退出登录',
    key: 'logout',
    icon: renderIcon(LogoutIcon)
  }
]

const onProfileSelect = async (key: string) => {
  if (key === 'logout') {
    await onLogout()
  }
}

const onLogout = async () => {
  authStore.logout()
  // 这里调用你的退出登录 API，以下是一个模拟的例子
  await new Promise((resolve) => setTimeout(resolve, 500))
  // 登出后跳转到登录页面
  router.push('/login')
}
</script>

<style scoped>
/* your styles here */
</style>
