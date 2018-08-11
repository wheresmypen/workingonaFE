<template>
  <div v-if="visible === true">
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="field is-expanded">
          <div class="field has-addons">
            <p class="control">
              <a class="button is-static">
                Amount
              </a>
            </p>
            <p class="control is-expanded">
              <input class="input" v-model="permit.totalValue" readonly/>
            </p>
          </div>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="close"></button>
    </div>
  </div>
</template>
<script>
  import EventBus from '../util/EventBus'

  export default {
    name: 'PermitDetail',
    data: function(){
      return{
        permit: null,
        visible: false,
      }
    },
    created: function(){
      var that = this
      EventBus.$on('SHOW_PERMIT_DETAIL', (detail)=>{
        that.permit = detail;
        that.visible = true
      })
    },
    methods: {
      close : function(){
        this.permit = null
        this.visible = false
      }
    }
  }
</script>
