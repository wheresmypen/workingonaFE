<template>
  <div class="content">
    <input class="input" type="text" name="city" placeholder="City"/>
    <div class="columns">
      <div class="column">
        <table class="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Permits Url</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <input class="input" type="text" name="city" placeholder="Permits Url"/>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="column">
        <table class="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>GeoJSON Url</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <input class="input" type="text" name="city" placeholder="GeoJSON Url"/>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
  import EventBus from '../util/EventBus'
  export default {
    components: {
    },
    created: function(){
      EventBus.$on('TOKEN_AVAILABLE', function (token){
        console.log(token)
      })
    },
    mounted: function(){

      EventBus.$emit('TOKEN_NEEDED')
    }
  }
</script>
<style lang="scss">
</style>
