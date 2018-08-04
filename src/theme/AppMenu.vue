<template>
  <div class="level">
    <div class="level-left">
      <div class="level-item">
      <a @click="showPermits">
        <span class="icon is-small">
          <icon name="building"></icon>
        </span>
      </a>
    </div>
    </div>
    <div class="level-right">
      <div class="level-item">
        <a @click="showAdmin">
          <span class="icon is-small">
            <icon name="wrench"></icon>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import EventBus from '../util/EventBus'
  export default {
    methods: {
      showAdmin: function showAdmin(){
        EventBus.$emit('ADMIN_SHOW')
      },
      showPermits: function showPermits(){
        debugger
        EventBus.$emit('SHOW_PERMITS')
      }
    }
  }
</script>
