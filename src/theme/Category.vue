<template>
  <div>
    <div
    v-for="(schloop, number) in schloope"
    v-bind:key="schloop.try"
    v-bind:postage="schloop">
      <app-schloop>
        {{schloop.try}}
        <h3 slot="title">{{ schloop.number }}</h3>
      </app-schloop>
    </div>
  </div>
</template>
<script>
  import Schloop from './Post.vue'
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
      'app-schloop': Schloop
    },
    data () {
      return {
        message:
          {
            'text': token
          },

        schloope:
          [],
        posts:
          [
            {
              "newCase": false,
              "reportable": true,
              "number": "PMT2017-01629",
              "address": "3633 BROADWAY",
              "assesorId": "0606738",
              "status": "ISS",
              "category": "Residential",
              "usesAndscopes": [
                "Single Family Detached Dwelling",
                " New",
                " Garage - Attached",
                " New"
              ],
              "permitTypes": [
                "Building",
                " Electrical",
                " Mechanical",
                " Plumbing",
                " Water",
                " Wastewater"
              ],
              "totalValue": 1800000,
              "subPermitValue": 205000,
              "applied": "04/20/2017",
              "approved": "07/27/2017",
              "issued": "08/08/2017",
              "newUnits": 1,
              "reUnits": 0,
              "affordableUnits": 0,
              "newSquareFeet": 4027,
              "reSquareFeet": 0,
              "description": "New two-story single family dwelling.  First floor 1,187 s.f. finished with kitchen, living, dining, and 106 s.f. unfinished mechanical room.  Second floor 1,837 s.f. finished with master, junior master, guest bedroom, media room, laundry, and 3/4 bath.  Covered patio on south side of residence and two walkout decks off the second floor.  Attached 650 s.f. unconditioned garage.  Scope to include associated mechanical, electrical, and plumbing.",
              "primaryFirst": "",
              "primaryLast": "SKYCASTLE HOMES, LLC",
              "primaryCompany": "SKYCASTLE HOMES, LLC",
              "contractorFirst": "",
              "contractorLast": "SKYCASTLE HOMES, LLC",
              "contractorCompany": "SKYCASTLE HOMES, LLC",
              "owner1First": "THOMAS",
              "owner1Last": "FLAHERTY",
              "owner1Company": "",
              "owner2First": "",
              "owner2Last": "",
              "owner2Company": ""
            }
        ]
      }
    }
  }
</script>
