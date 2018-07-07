<template>
    <div id="ajaxSuccess">
      <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
            <div class="control has-icons-left"
              <span class="icon is-large is-left">
                <icon class="has-text-success" name="check"></icon>
              </span>
                <strong>{{message.title}}:</strong><br>
                {{message.content}}
            </div>
          </div>
          <button class="modal-close is-large" aria-label="close" @click="closeThis" ></button>
        </div>
      </div>
    </div>
</template>
<script>
    import Icon from 'vue-awesome/components/Icon.vue'
    import EventBus from '../util/EventBus'
    var $ = require('jquery')
    export default {
        name: 'AjaxSucess',
        components: Icon,
        data() {
            return {
                message: {
                    title: "",
                    content: ""
                }
            }
        },
        mounted: function() {
          var that = this;
          EventBus.$on('AJAX_SUCCESS', (t, c) =>{
              that.message.title = t
              that.message.content = c
              $('#ajaxSuccess > .modal').addClass('is-active')
          })
        },
        methods:{
          closeThis: function closeModal(){
              $('#ajaxSuccess > .modal').removeClass('is-active')
          }
        }
     }
</script>

<style scoped lang="scss">
    .modal-content > input{
      margin-bottom : calc(5vh - 5px);
    }

    #ajaxSuccess {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>
