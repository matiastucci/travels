<script>
  import travelsData from '@/services/travels/index.json'

  export default {
    name: 'listModal',

    data () {
      return {
        travels: travelsData.oldTravels.reverse()
      }
    }
  }
</script>

<template lang="pug">
  modal(name='travels-modal')
    .container
      .item(:key='index', v-for='(travel, index) in travels')
        .flag
          span {{ travel.flag }}
        .city
          span {{ travel.city }},
        .country
          span {{ travel.country }}
</template>

<style lang="scss" scoped>
  @import "../styles/variables.scss";

  .container {
    .item {
      display: flex;
      align-items: center;
      height: 40px;
      padding: 0 15px;
      border-bottom: 1px solid $secondary-dark;
      .flag {
        margin-top: 4px;
        font-size: 20px;
      }
      .city {
        margin: 0 10px;
      }
    }
  }
</style>
