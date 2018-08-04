<template>
  <div v-if="visible === true">
    <div class="level">
      <div class="level-item">
        <div class="tabs">
          <ul>
            <li>
              <a @click="showCityTab">
                <span class="icon is-small">
                  <icon name="map"></icon>
                </span>
                <span>Cities</span>
              </a>
            </li>
            <li>
              <a @click="showLogsTab">
                <span class="icon is-small">
                  <icon name="book"></icon>
                </span>
                <span>logs</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <city></city>
    <logs></logs>
  </div>
</template>
<script>
  import EventBus from '../util/EventBus'
  import City from './City.vue'
  import Logs from './Logs.vue'
  export default {
    name: 'Admin',
    components: {
      'city': City,
      'logs': Logs
    },
    data: function(){
      return{
        visible: false,
      }
    },
    mounted: function (){
      var that = this

      EventBus.$on('ADMIN_SHOW', function (){
        EventBus.$on('TOKEN_AVAILABLE', function (resp){
          EventBus.$emit('ADMIN_TOKEN_AVAILABLE', resp.responseText)
        })
        EventBus.$emit('TOKEN_NEEDED')
        that.visible = true
      })
    },
    methods:{
      showCityTab: function (){
        EventBus.$emit('HIDE_LOGS_TAB')
        EventBus.$emit('SHOW_CITY_TAB')
      },
      showLogsTab: function (){
        EventBus.$emit('HIDE_CITY_TAB')
        EventBus.$emit('SHOW_LOGS_TAB')
      }
    }
  }
</script>
