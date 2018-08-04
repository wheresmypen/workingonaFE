<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click='login();'>Log-in</button>
        <form @submit.prevent="calcul(form.xlength)" class= "form" type="button" v-if="(posts.length > 0)" v-on:change="dump();">
          <div class="field">
            <div class="control">
              <input v-model="form.xlength" class="input" type="text" placeholder="permit requests">
              <!-- <div>{{ form.xlength }}</div> -->
            </div>
          </div>
        </form>
    </div>
</template>

<script>
    class dataField {
      constructor() {
        this.data = new Array();
      }
    }

    window.temp1 = new dataField()
    var tokenPath = 'http://52.14.168.26:8081/api/security/login'
    var dataAPI = 'http://52.14.168.26:8081/api/client/city?area=boulder&report=master'
    var apiCall = require("../util/APIcall.js")
    var dataRequest = require("../util/DataRequest.js")

    export default {
        name: 'Logins',
        data() {
            return {
              data: {},
              form : {
                xlength : '',
                number : ''
              },
              window: window,
              input: {
                  username: "",
                  password: ""
              },
              posts: []
            }
        },
        methods: {
            calcul(valuess) {
                this.$set(this.$parent.$parent.$data, "xlength", valuess)
                console.log(this)
                console.log(valuess)
                return valuess
            },
            dump(postage) {
                this.postage2 = new Array
                // this is the VUE dynamic document - console.log(document.children["0"].children[1].children["0"].children[1].children["0"].children["0"].__vue__.posts)
                // concatenates a couple of hard coded arrays to put together some DOM content in VUE
                var selection = window.temp1.data[0]
                var slipper = selection.slice(0, this.form.xlength)
                slipper.forEach(function(element){this.$parent.$children[1].posts.push(element)},this)
                this.$set(this.$parent.$data, "authenticated", slipper)
                },
            login(data, response) {
                debugger
                var elem = event.currentTarget.parentElement
                var thingy = this
                this.$set(this.$parent.$data, "authenticated", "user")
                this.$data.postage = elem.__vue__.postage
                if(this.input.username != "" && this.input.password != "") {
                  if(this.input.username == "admin" && this.input.password == "p") {
                      var token = apiCall.APItoken(tokenPath, 'user', 'clave', 'client')
                      token.done(
                        function(response){
                            var posts = new dataField
                            dataRequest.APIget(dataAPI, response, '').then( value => {
                                  console.log(value); // Success!
                                  posts.data.push(value)
                                  window.temp1 = posts
                              }, reason => {
                              console.log(reason); // Error!
                            } );
                          })
                        }
                  if(this.input.username == "nraboy" && this.input.password == "password"){
                    token = dataRequest.APItoken(tokenPath, 'user', 'clave', 'client')
                    this.posts = ["a", "b", "c"]
                    token.done(function(response){
                      dataRequest.APIget(dataAPI, response, '').then( value => {
                        console.log(value); // Success!
                      }, reason => {
                        console.log(reason); // Error!
                      } );
                    }
                  )}
                }

                  else {
                  console.log("A username and password must be present");
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
