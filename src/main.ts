import './assets/main.css'
import 'vant/lib/index.css';

import { createApp } from 'vue'
import { ConfigProvider } from 'vant';

import App from './App.vue'
import router from './router'
import { setupStore } from '@/stores'
import { setupVant } from '@/plugins/vant'

async function bootstrap() {
  const app = createApp(App)
  
  setupStore(app)
  setupVant(app)
  app.use(router)
  app.use(ConfigProvider)

  app.mount('#app')
}

bootstrap()
