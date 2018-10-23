<template>
  <div v-if="visible === true">
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <div class="modal-card-head">
          <p class="modal-class-title">Permit Detail<input class="input" v-model="permit.address" readonly/> </p>
        </div>
        <div class="modal-card-body">
          <div class="columns">
            <div class="column is-half">
              <div class="field is-expanded">
                <div class="field has-addons">
                  <p class="control">
                    <a class="button is-static">
                      Building type
                    </a>
                  </p>
                  <p class="control is-expanded">
                    <input class="input" v-model="permit.usesAndscopes" readonly/>
                  </p>
                </div>
              </div>
              <div class="field is-expanded">
                <div class="field has-addons">
                  <p class="control">
                    <a class="button is-static">
                      Permit(s)
                    </a>
                  </p>
                  <p class="control is-expanded">
                    <input class="input" v-model="permit.permitTypes" readonly/>
                  </p>
                </div>
              </div>
              <div class="field is-expanded">
                <div class="field has-addons">
                  <p class="control">
                    <a class="button is-static">
                      Last Name
                    </a>
                  </p>
                  <p class="control is-expanded">
                    <input class="input" v-model="permit.primaryLast" readonly/>
                  </p>
                </div>
              </div>
            </div>
            <div class="column is-half">
              <div class="field is-expanded">
                <div class="field has-addons">
                  <p class="control">
                    <a class="button is-static">
                      Company
                    </a>
                  </p>
                  <p class="control is-expanded">
                    <input class="input" v-model="permit.primaryCompany" readonly/>
                  </p>
                </div>
              </div>
              <div class="field is-expanded">
                <div class="field has-addons">
                  <p class="control">
                    <a class="button is-static">
                      Permit Status
                    </a>
                  </p>
                  <p class="control is-expanded">
                    <input class="input" v-model="permit.status" readonly/>
                  </p>
                </div>
              </div>
              <div class="field is-expanded">
                <div class="field has-addons">
                  <p class="control">
                    <a class="button is-static">
                      Category
                    </a>
                  </p>
                  <p class="control is-expanded">
                    <input class="input" v-model="permit.category" readonly/>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-card-footer">
          <p>Buttons here</p>
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
