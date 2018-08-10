<template>
  <div v-if="visible === true">
    <div id="permits" class="columns">
        <div  class="column" v-for="permit in permits">
          <div class="card">
            <div class="card-header">
              <p class="card-header-title">
                Total Value: {{permit.totalValue}}
              </p>
            </div>
            <div class="card-content">
                Address: {{permit.address}}<br/>
                New Units: {{permit.newunits}}
                </p>
            </div>
            <div class="card-footer">
              <a @click="displayPermit(event)">
              <input type="hidden" v-bind:value="permit.number" />
              Read More
              </a>
            </div>
          </div>
        </div>
    </div>
    <div class="level-right">
      <div class="level-item">
        <a class="button is-primary" @click="loadNext">Next</a>
      </div>
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
        permits: [],
        pageSize: 9,
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
      EventBus.$on('HIDE_ALL', ()=>{
        that.visible = false
      })
    },
    methods: {
      getPermits: function () {
        var that = this
        apiCall.APIget(getPermitsPath + that.pageSize + '&page=' + that.page , that.token).done(function(response){
          that.page++
          that.permits = response
        })
      },
      displayPermit: function(permitNumber){
        console.log(permitNumber)
      },
      loadNext : function(){
        var that = this
        apiCall.APIget(getPermitsPath + that.pageSize + '&page=' + that.page , that.token).done(function(response){
          that.page++
          that.permits = response
        })
      }
    },

  }
</script>
<style lang="scss">
  #permits .column {
      flex-basis: 33%;
      flex-grow: 0;
  }

  @media (max-device-width: 1366px){
    body{
      font-size: 0.70rem;
    }
  }

  @media (max-device-width: 1024px){
    body{
      font-size: 0.55rem;
    }
  }

  @media (max-device-width: 824px){
    body{
      font-size: 0.35rem;
    }
  }
</style>
