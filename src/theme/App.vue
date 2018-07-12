<template>
    <div id="app">
        <div id="nav">
            <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
        </div>
        <router-view @authenticated="setAuthenticated" />
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
            //    defaultGrab: function(){console.log(this); window.document.body.children[0].children[1].firstChild.children[1].__vue__.$parent.$data.authenticated = "normy"},
                mockAccount: {
                    username: "nraboy",
                    password: "password"
                }
            }
        },
        mounted() {
            debugger
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            getPoint(window) {
              if (!window.document.body.children[0].children[1].firstChild.children[1].__vue__.$parent.$data.authenticated) {
                return window.document.body.children[0].children[1].firstChild.children[1].__vue__.$parent.$data.authenticated;
              }
              return 0;
            },

            setAuthenticated(status) {
                this.authenticated = status;
                debugger
            },

            logout() {
              this.authenticated = false;
            }
        },
        ref: "#sumd"
    }
</script>

<style>
    body {
        background-color: #F0F0F0;
    }
    h1 {
        padding: 0;
        margin-top: 0;
    }
    #app {
        width: 1024px;
        margin: auto;
    }
</style>
