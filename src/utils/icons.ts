import { h } from 'vue'
import type { Component } from 'vue'

function renderIcon(icon: Component) {
  return () => h('span', null, { default: () => h(icon) })
}

export { renderIcon }
