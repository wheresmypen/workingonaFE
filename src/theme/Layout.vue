<template>
  <div>
    <app-header></app-header>
    <section class="main-section section">
      <div class="container content">
        <city></city>
        <login></login>
      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>
<script>
  import EventBus from '../util/EventBus'
  import AppHeader from './AppHeader.vue'
  import AppFooter from './AppFooter.vue'
  import Category from './Category.vue'
  import Login from './Login.vue'
  import City from './City.vue'

  export default {
    components: {
      'app-header': AppHeader,
      'app-footer': AppFooter,
      'category': Category,
      'login': Login,
      'city': City
    },
    created: function(){
      EventBus.$on('TOKEN_AVAILABLE', function (token){
        console.log(token)
      })
    },
    mounted: function(){
      EventBus.$emit('TOKEN_NEEDED')
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
