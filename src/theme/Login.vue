<template>
    <div id="login">
      <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
          <p class="control  has-icons-left">
            <input class="input is-primary is-rounded" type="text" name="username" v-model="input.username" placeholder="Username"/>
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
          <p class="control  has-icons-left">
            <input class="input is-primary is-rounded" type="password" name="password" v-model="input.password" placeholder="Password" />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
          <input class="input is-primary is-rounded has-background-primary has-text-white" type="submit" v-on:click="login" value="Login" />
        </div>
      </div>
    </div>
</template>

<script>
    import EventBus from '../util/EventBus'
    var $ = require('jquery')
    var tokenPath = 'http://52.14.168.26:8081/api/security/login'
    var apiCall = require("../util/APIcall.js")
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        mounted: function() {
          EventBus.$on('TOKEN_NEEDED', () =>{
              $('#login > .modal').addClass('is-active')
          })
        },
        methods: {
          login: function login() {
            if(this.input.username != "" && this.input.password != "") {
                var tokenPromise = apiCall.APItoken(tokenPath, 'admin', 'password', 'ADMIN')
                tokenPromise.done( function (data, status, response) {
                  EventBus.$emit('TOKEN_AVAILABLE', response)
                  $('#login > .modal').removeClass('is-active')
                }).fail(function (request, status, error) {
                  //TODO HANDLE THE CRASH MORE THOROUGHLY
                })
            } else {
                //TODO ADD HTML5 Field validation
                console.log("A username and password must be present")
            }
          }
        }
     }
</script>

<style scoped lang="scss">
    .modal-content > input{
      margin-bottom : calc(5vh - 5px);
    }

    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>
