<template>
    <div class="AppFooter text-center py-4">
      <p class="text-sm text-gray-700">{{ currentYear }} © {{ websiteConfig.enTitle }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { websiteConfig } from '@/config/website.config';
  
  const currentYear = ref(new Date().getFullYear())
  </script>
  
  <style lang="less">
  .AppFooter {

  }
  </style>
  