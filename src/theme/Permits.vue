<template>
  <div v-if="visible === true">
    <div class="card">
      <div class="card-content">
        <slot name="title"></slot>
        <slot name="content"></slot>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item">
          Read More
        </a>
      </footer>
    </div>
  </div>
</template>
<script>
  import EventBus from '../util/EventBus'
  var apiCall = require("../util/APIcall.js")
  var $ = require('jquery')
  var getPermitsPath = 'http://localhost:8081/api/client/city?area=boluder&report=master&pageSize='

  export default {
    data: function(){
      return{
        logs: [],
        pageSize: 10,
        page:  0,
        visible: false,
        token: null
      }
    },
    created: function() {
      var that = this
      EventBus.$on('USER_TOKEN_AVAILABLE', (token)=>{
        that.token = token
        that.getPermits()
      })
      EventBus.$on('SHOW_PERMITS', ()=>{
        EventBus.$emit('USER_TOKEN_NEEDED')
        that.visible = true
      })
      EventBus.$on('HIDE_PERMITS', ()=>{
        that.visible = false
      })
    },
    methods: {
      getPermits: function () {
        var that = this
        debugger
        apiCall.APIget(getPermitsPath + that.pageSize + '&page=' + that.page , that.token).done(function(response){
          debugger
          that.page++
          that.logs = response
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
