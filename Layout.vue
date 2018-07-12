<template>
  <div>
    <app-header></app-header>
    <section class="main-section section">
      <div class="container loginForm">
        <category></category>
        <logging></logging>
      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>
<script>
  import App from './App.vue'
  import AppHeader from './AppHeader.vue'
  import AppFooter from './AppFooter.vue'
  import Category from './Category.vue'
  import Logging from './Logging.vue'
  import Router from '../Router.js'
  export default {
    data() {
      return {
        authenticated: false,
      }
    },
    components: {
      'router': Router,
      'app': App,
      'app-header': AppHeader,
      'app-footer': AppFooter,
      'category': Category,
      'logging': Logging
    }
  }
</script>
<style lang="scss">
  $primary: #287ab1;
  @import '~bulma';

  .columns{
    flex-wrap: wrap
  }
</style>
