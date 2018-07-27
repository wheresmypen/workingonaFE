<template>
  <div>
    <div
    v-for="(post, number) in posts"
    v-bind:key="post.try"
    v-bind:postage="post">
      <app-case>
        {{post.try}}
        <h3 slot="title">{{ post.number }}</h3>
      </app-case>
    </div>
  </div>
</template>
<script>
  import Incident from './Post.vue'
  // main.js
  var greetings = require("../util/APIcall.js");
  var pathOne = 'http://52.14.168.26:8081/api/security/login'
  var pathTwo = 'http://52.14.168.26:8081/api/admin/city/add/'
  var data = new Object()
  data.area = 'boulder'
  data.permits = ['https://www-static.bouldercolorado.gov/docs/opendata/2017_Construction_Permits.csv']
  data.geo = ['https://www-static.bouldercolorado.gov/docs/opendata/DevelopmentReview.GeoJSON']

  var promise = greetings.APItoken(pathOne, 'admin', 'password', 'ADMIN')

  var postCity = function(url, token, data){
    var dataCall = greetings.APIpost(url, token, data)
    dataCall.done(function(response){
      console.log(response)
      return response
    })
  }
  var token = promise.done(function(response){
    console.log('T: ' + response)
    postCity(pathTwo, response, data)
    return response
  })

  export default {
    components: {
      'app-case': Incident
    },
    data () {
      return {
        message:
          {
            'text': token
          },

        posts:
          []
      }
    }
  }
</script>
