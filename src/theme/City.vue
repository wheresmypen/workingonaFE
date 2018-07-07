<template>
  <div class="content">
    <div class="dynamic-row control has-icons-left">
      <input class="input" type="text" name="city" placeholder="City" @blur="checkCityName"/>
      <span class="icon is-small is-left">
        <icon name="home"></icon>
      </span>
    </div>
    <div class="columns">
      <div class="column">
        <h2>Permits</h2>
        <div v-for="cityUrl in cityUrls">
          <div class="dynamic-row" v-model="cityUrl.value">
            <div class="field has-addons">
              <div class="control full-width has-icons-left has-icons-right">
                <input class="input" type="text" name="city" placeholder="Url" @blur="checkUrl"/>
                <span class="icon is-small is-left">
                  <icon name="link"></icon>
                </span>
                <span class="icon is-small is-right">
                  <icon name="check"></icon>
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
        <h2>GeoJson</h2>
        <div v-for="geoUrl in geoJsonUrls">
          <div class="dynamic-row" v-model="geoUrl.value">
            <div class="field has-addons">
              <div class="control full-width has-icons-left">
                <input class="input" type="text" name="city" placeholder="Url"/>
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
  var addCityPath = 'http://localhost:8081/api/admin/city/add'
  var geoJsonUrls = [""]
  var cityUrls = [""]
  var currentUrl
  var urlValidator = document.createElement('a')
  var token

  export default {
    data: function(){
      return{
        geoJsonUrls,
        cityUrls,
        hasCityName : false,
        hasCityUrls : false,
        blocked: false
      }
    },
    methods: {
      checkCityName : function checkCityName(event){
        this.hasCityName  = $(event.target).val() !== ''
      },
      checkUrl : function checkUrl(event){
        urlValidator.href = $(event.target).closest('.field').find('input').val()
        currentUrl = null
        if (urlValidator.host && urlValidator.host != window.location.host){
          var icon = $(event.target).closest('.control').find('.is-right')[0]
          $(icon).addClass('has-text-success')
          currentUrl = urlValidator.href
        }
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
        if (this.hasCityName && (this.hasCityUrls || currentUrl !== null)){
          var city = $(event.target).closest('.content').find('input').val()
          var curls = this.cityUrls
          var gurls = this.geoJsonUrls

          curls.shift()
          gurls.shift()
          var request = new Object()
          request.area = city
          request.permits = curls
          if (request.permits.length === 0){
            request.permits.push(currentUrl)
          }
          request.geo = gurls
          apiCall.APIpost(addCityPath, token, request).done(function(response){
            $(event.target).closest('.content').find('.input').each(function(){
              $(this).val('')
              EventBus.$emit('AJAX_SUCCESS', 'Add City', JSON.parse(response).message)
            })
          })
          $('.control > .is-right').removeClass('has-text-success')
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
