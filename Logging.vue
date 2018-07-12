<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click='login();'>Longing</button>
        <button type="button" v-if="(postage2.length > 0)" v-on:click='garbage();'>Show first ten records</button>
    </div>
</template>

<script>
    class dataField {
      constructor() {
        this.name = "home";
        this.data = new Array();
      }
    }

    window.temp1 = new dataField()
    var tokenPath = 'http://52.14.168.26:8081/api/security/login'
    var dataAPI = 'http://52.14.168.26:8081/api/client/city?area=boulder&report=master'
    var app = require("./App.vue")
    var apiCall = require("../util/APIcall.js")
    var dataRequest = require("../util/DataRequest.js")

    var dataAPIStream = new Object({
      "newCase": "",
      "reportable": undefined,
      "number": "",
      "address": "",
      "assesorId": "",
      "status": "",
      "category": "",
      "usesAndscopes": [],
      "permitTypes": [],
      "totalValue": 0,
      "subPermitValue": 0,
      "applied": "",
      "approved": "",
      "issued": "",
      "newUnits": 0,
      "reUnits": 0,
      "affordableUnits": 0,
      "newSquareFeet": 0,
      "reSquareFeet": 0,
      "description": "",
      "primaryFirst": "",
      "primaryLast": "",
      "primaryCompany": "",
      "contractorFirst": "",
      "contractorLast": "",
      "contractorCompany": "",
      "owner1First": "",
      "owner1Last": "",
      "owner1Company": "",
      "owner2First": "",
      "owner2Last": "",
      "owner2Company": ""
    })

    export default {
        name: 'Logins',
        data() {
            return {
                temp1: true,
                window: window,
                selectedDOM: app.default.data(),
                input: {
                    username: "",
                    password: ""
                },
                postage2: []
            }
        },
        //  mounted() {app.default.data().defaultGrab()},
        methods: {
            garbage(postage) {
                this.postage2 = new Array
                // app.default.data().defaultGrab()
                // this is the VUE dynamic document
                // console.log(document.children["0"].children[1].children["0"].children[1].children["0"].children["0"].__vue__.schloope)
                // this is just a demo of two values being traded behind the scenes
                // concatenates a couple of hard coded arrays to put together some DOM content in VUE
                var selection = window.temp1.data[0]
                // console.log(typeof selection)
                var slipper = selection.slice(0,9)
                // console.log(slipper.length)
                slipper.forEach(function(element){this.$parent.$children[1].schloope.push(element)},this)
                debugger
                },
            login(data, response) {
                //  var postage = new Array
                var elem = event.currentTarget.parentElement
                var thingy = this
                app.default.methods.setAuthenticated("user")
                console.log(app.default.data().defaultGrab)
                this.$set(this.$parent.$data, "authenticated", "user")
                this.$set(this.$parent.$data)
                this.$data.postage = elem.__vue__.postage
                // console.log(window.document.body.children[0].children[1].firstChild.children[1].__vue__.postage)
                console.log(elem.__vue__.postage)
                console.log(window.document.body.children[0].children[1].firstChild.children[1].__vue__.postage)
                console.log(this.$parent.$parent)//body/div/section/div)
                console.log(window.temp1)

                if(this.input.username != "" && this.input.password != "") {

                  if(this.input.username == "admin" && this.input.password == "password"){
                      var token = apiCall.APItoken(tokenPath, 'user', 'clave', 'client')
                      token.done(
                        function(response){
                            console.log(app.default.methods.setAuthenticated("admin"))
                            // console.log(postage)
                            // postage.push({"number":"999"})
                            // postage2.push({"number":"9999"})
                            debugger
                            console.log(response)
                            var schloope = new dataField
                            debugger
                            dataRequest.APIget(dataAPI, response, '').then( value => {
                                  debugger
                                  console.log(value); // Success!
                                  console.log(schloope)
                                  debugger
                                  schloope.data.push(value)
                                  console.log(schloope)
                                  debugger
                                  window.temp1 = schloope
                              }, reason => {
                              debugger
                              console.log(reason); // Error!
                            } );
                          })
                          this.postage2 = ["a", "b", "c"]
                          debugger
                        }
                  if(this.input.username == "nraboy" && this.input.password == "p") {
                    token = dataRequest.APItoken(tokenPath, 'user', 'clave', 'client')
                    debugger
                    token.done(function(response){
                      console.log(response)
                      dataRequest.APIget(dataAPI, response, '').then( value => {
                        console.log(value); // Success!
                      }, reason => {
                        console.log(reason); // Error!
                      } );
                    }
                  )}

                  else {
                  console.log("A username and password must be present");
                  }
                  console.log(dataAPIStream)
                  debugger
              }
            }

        }
      }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>
