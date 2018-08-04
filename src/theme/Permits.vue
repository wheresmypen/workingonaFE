<template>
  <div v-if="visible === true" class="container">
    <div class="card">
      <div class="card-content">
        <slot name="title"></slot>
        <slot name="content"></slot>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item" :href="link"
        target="_blank">Read More</a>
      </footer>
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
        //CALL getPermits here;
      })
      EventBus.$on('SHOW_PERMITS', ()=>{
        EventBus.$emit('TOKEN_NEEDED')
        that.visible = true
      })
      EventBus.$on('HIDE_PERMITS', ()=>{
        that.visible = false;
      })
    },
    methods: {
      getPermits: function () {
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
