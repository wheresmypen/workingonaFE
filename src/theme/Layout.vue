<template>
  <section class="main-section">
    <div class="columns">
      <div class="column is-one-fifth" name="ad-left">
        here
      </div>
      <div class="column is-three-fifths" name="main">
        <app-menu></app-menu>
        <admin></admin>
        <login></login>
        <permits></permits>
      </div>
      <div class="column is-one-fifth" name="ad-right">
        there
      </div>
    </div>
  </section>
</template>
<script>
  import EventBus from '../util/EventBus'
  import AppMenu from './AppMenu.vue'
  import Admin from './Admin.vue'
  import Login from './Login.vue'
  import Permits from './Permits.vue'

  export default {
    components: {
      'app-menu': AppMenu,
      'admin': Admin,
      'login': Login,
      'permits': Permits
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
