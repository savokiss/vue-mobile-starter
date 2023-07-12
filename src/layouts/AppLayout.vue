<template>
  <div class="AppLayout h-screen flex flex-col justify-between">
    <AppHeader />
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'

import AppHeader from '@/layouts/AppHeader.vue'
import AppFooter from '@/layouts/AppFooter.vue'

const isCollapsed = ref(false)

function onCollapseChange(collapsed: boolean) {
  isCollapsed.value = collapsed
}
</script>

<style lang="less">
.AppLayout {
  .footer-layout {
    bottom: 0;
  }
  .n-layout-sider {
    @apply bg-gray-500;
  }
}
</style>
