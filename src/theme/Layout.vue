<template>
  <div>
    <app-header></app-header>
    <section class="main-section section">
      <div class="container loginForm">
        <logging></logging>
      </div>
      <div class="box">
        <ul>
        <!-- loop through all the `form` properties and show their values -->
          <li v-for="(number, authenticateder) in form">
            <!-- <strong>{{ number.number }}</strong> -->
            <ul>
            <!-- loop through all the `slipper` numbers and show their attributes -->
              <li v-for="(number) in authenticated">
                <strong>{{ number.number }}</strong>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>
<script>
  //  import App from './App.vue'
  import AppHeader from './AppHeader.vue'
  import AppFooter from './AppFooter.vue'
  // import Category from './Category.vue'
  import Logging from './Logging.vue'
  import Router from '../Router.js'

  debugger

  export default {
    data() {

      return {
        // message : this,
        selected : window.temp1.data[0],
        messages : window.document.children["0"].children[1].children["0"].children[1],
        //.children["0"].children["0"].$data.message.text,
        form : {
          xlength :
            {
            "newCase": false,
            "reportable": true,
            "number": "PMT2017-01629",
            "address": "3633 BROADWAY",
            "assesorId": "0606738",
            "status": "ISS",
            "category": "Residential",
            }

        },
        authenticated: false,
      }
    },
    computed: {
      newVar() {
        this.$set(this.$data, "authenticated", window.temp1.data)
        return { dataJob: "hewow" }

      }
    },
    components: {
      'router': Router,
      //  'app': App,
      'app-header': AppHeader,
      'app-footer': AppFooter,
      // 'category': Category,
      'logging': Logging
    }
  }

  debugger

</script>
<style lang="scss">
  $primary: #287ab1;
  @import '~bulma';

  .columns{
    flex-wrap: wrap
  }
</style>
