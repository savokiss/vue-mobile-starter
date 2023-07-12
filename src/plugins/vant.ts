import type { App, Plugin } from 'vue'
import { Button, Loading, NavBar, Search, Toast } from 'vant'

const components = [Button, Loading, Search, Toast, NavBar]

const plugin: Plugin = {
  install(app: App) {
    components.forEach((comp) => app.use(comp))
  }
}

export function setupVant(app: App<Element>) {
  app.use(plugin)
}
