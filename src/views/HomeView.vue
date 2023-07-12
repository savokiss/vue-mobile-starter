<script setup lang="ts">
import { websiteConfig } from '@/config/website.config'
</script>

<template>
  <main class="container mx-auto font-bold text-lg">
    <van-nav-bar :title="websiteConfig.title" left-arrow></van-nav-bar>
    <h2>欢迎来到 {{ websiteConfig.loginDesc }}</h2>

    <div class="mt-4">
      <van-button type="primary">这个按钮</van-button>
    </div>
  </main>
</template>
