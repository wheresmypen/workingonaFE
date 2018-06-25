import Vue from 'vue'
import AppLayout from './theme/Layout.vue'

export const serverBus = new Vue()

const app = new Vue({
  render: h => h(AppLayout)
})

export { app }
