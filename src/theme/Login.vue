<template>
    <div v-if="visible === true" class="login">
      <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
          <p class="control  has-icons-left">
            <input class="input is-primary is-rounded" type="text" name="username" v-model="input.username" placeholder="Username"/>
            <span class="icon is-small is-left">
              <icon name="user"></icon>
            </span>
          </p>
          <p class="control  has-icons-left">
            <input class="input is-primary is-rounded" type="password" name="password" v-model="input.password" placeholder="Password" />
            <span class="icon is-small is-left">
              <icon name="lock"></icon>
            </span>
          </p>
          <input class="input is-primary is-rounded has-background-primary has-text-white" type="submit" @click="login" value="Login" />
        </div>
      </div>
    </div>
</template>
<script>
    import Icon from 'vue-awesome/components/Icon.vue'
    import EventBus from '../util/EventBus'
    var $ = require('jquery')
    var tokenPath = 'http://52.14.168.26:8081/api/security/login'
    var apiCall = require("../util/APIcall.js")
    export default {
        name: 'Login',
        components: Icon,
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                },
                visible: false
            }
        },
        created: function(){
          var that = this
          EventBus.$on('TOKEN_NEEDED', () =>{
            that.visible = true
          })
        },
        methods: {
          login: function login() {
            if(this.input.username != "" && this.input.password != "") {
                var that = this
                var tokenPromise = apiCall.APItoken(tokenPath, 'admin', 'password', 'ADMIN')
                tokenPromise.done( function (data, status, response) {
                  EventBus.$emit('TOKEN_AVAILABLE', response)
                  that.visible = false
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

    .login-modal {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>
