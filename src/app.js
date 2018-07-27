import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from './theme/Layout.vue'

Vue.use(Router)

console.log(AppLayout)

const app = new Vue({
  beforeCreate: function () {
    console.log(this.$app)
  },

  // ...AppLayout
  render: h => h(AppLayout)
})

export { app }
