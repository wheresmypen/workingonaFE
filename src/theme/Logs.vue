<template>
  <div v-if="visible === true" class="container">
    <div class="level">
      <div class="level-item">
        <div id="logs" class="tabs">
          <ul>
            <li v-for="log in logs">
              <a>
                <span class="icon is-small">
                  <icon name="building"></icon>
                </span>
                <span>{{log.area}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import EventBus from '../util/EventBus'
  var apiCall = require("../util/APIcall.js")
  var $ = require('jquery')
  var getLogsPath = 'http://localhost:8081/api/admin/city/logs'

  export default {
    data: function(){
      return{
        logs: [],
        visible: false,
        token: null
      }
    },
    created: function() {
      var that = this
      EventBus.$on('ADMIN_TOKEN_AVAILABLE', (token)=>{
        that.token = token
      })
      EventBus.$on('SHOW_LOGS_TAB', ()=>{
        that.getLogs();
      })
      EventBus.$on('HIDE_LOGS_TAB', ()=>{
        that.visible = false;
      })
    },
    methods: {
      getLogs: function () {
        var that = this;
        apiCall.APIget(getLogsPath, that.token).done(function(response){

          that.logs = response;
          that.visible = true;
        })
      }
    }
  }
</script>
<style lang="scss">
  #logs ul {
      -webkit-flex-direction: column;
      flex-direction: column;
  }
</style>
