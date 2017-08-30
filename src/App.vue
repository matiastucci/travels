<script>
  import customHeader from '@/components/Header'

  export default {
    name: 'app',
    components: { customHeader }
  }
</script>

<template lang="pug">
  #app
    custom-header
    router-view.router-view
</template>

<style lang="scss">
  @import "styles/main.scss";
  .router-view {
    height: 93vh;
  }
</style>
