<template>
  <div class="content">
    <div class="control has-icons-left">
      <input class="input" type="text" name="city" placeholder="City" @blur="checkCityName"/>
      <span class="icon is-small is-left">
        <icon name="home"></icon>
      </span>
    </div>
    <div class="columns">
      <div class="column">
        <h2> City Urls</h2>
        <div v-for="cityUrl in cityUrls">
          <div class="dynamic-row" v-model="cityUrl.value">
            <div class="field has-addons">
              <div class="control full-width has-icons-left">
                <input class="input" type="text" name="city" placeholder="Permits Url"/>
                <span class="icon is-small is-left">
                  <icon name="link"></icon>
                </span>
              </div>
              <div class="control">
                <a class="button is-info" @click="addCityRow">
                  <icon name="plus"></icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <h2> GeoJson Urls</h2>
        <div v-for="geoUrl in geoJsonUrls">
          <div class="dynamic-row" v-model="geoUrl.value">
            <div class="field has-addons">
              <div class="control full-width has-icons-left">
                <input class="input" type="text" name="city" placeholder="Permits Url"/>
                <span class="icon is-small is-left">
                  <icon name="link"></icon>
                </span>
              </div>
              <div class="control">
                <a class="button is-info" @click="addGeoRow">
                  <icon name="plus"></icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <input class="button is-pulled-right" type="submit" value="Add" v-on:click="addCity"/>
  </div>
</template>
<script>
  import EventBus from '../util/EventBus'
  var apiCall = require("../util/APIcall.js")
  var $ = require('jquery')
  var addCityPath = 'http://52.14.168.26:8081/api/admin/city/add'
  var geoJsonUrls = [""]
  var cityUrls = [""]
  var urlValidator = document.createElement('a')
  var token

  export default {
    data: function(){
      return{
        geoJsonUrls,
        cityUrls,
        hasCityName : false,
        hasCityUrls : false
      }
    },
    methods: {
      checkCityName : function checkCityName(event){
        this.hasCityName  = $(event.target).val() !== ''
      },
      addGeoRow :   function addGeoRow(event){
        urlValidator.href = $(event.target).closest('.field').find('input').val()
        if (urlValidator.host && urlValidator.host != window.location.host){
            geoJsonUrls.push(urlValidator.href)
        }
      },
      addCityRow : function addCityRow(){
        var input = $(event.target).closest('.field').find('input')
        urlValidator.href = $(input).val()
        if (urlValidator.host && urlValidator.host != window.location.host){
            if ($.inArray(urlValidator.href, this.cityUrls) == -1){
              cityUrls.push(urlValidator.href)
              this.hasCityUrls = true;
            }
        }
        else{
          $(input).val('')
        }
      },
      addCity: function addCity(event){
        if (this.hasCityName && this.hasCityUrls){
          var city = $(event.target).closest('.content').find('input').val()
          var curls = this.cityUrls
          var gurls = this.geoJsonUrls

          curls.shift()
          gurls.shift()
          var request = new Object()
          request.area = city
          request.permits = curls
          request.geo = gurls
          apiCall.APIpost(addCityPath, token, request).done(function(response){
            $(event.target).closest('.content').find('.input').each(function(){
              $(this).val('')
            })
          })
          this.cityUrls = [""]
          this.geoJsonUrls = [""]
          this.hasCityName = false
          this.hasCityUrls = false
        }
      }
    },
    created: function(){
      EventBus.$on('TOKEN_AVAILABLE', function (resp){
        token = resp.responseText
      })
    },
    mounted: function(){
      if (token === null){
        EventBus.$emit('TOKEN_NEEDED')
      }
    }
  }
</script>
<style scoped lang="scss">
  .dynamic-row{
    margin-top: 0.50em;
    margin-bottom: 0.50em;
    margin-right: 0.50em;
    margin-left: 0.50em;
  }

  .full-width{
    width: 100%;
  }
</style>
