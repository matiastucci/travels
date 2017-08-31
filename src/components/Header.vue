<script>
  import travelsData from '@/services/travels/index.json'
  import travelsHelper from '@/services/travels/helper'

  export default {
    name: 'header',

    data () {
      return {
        currentPosition: travelsData.current,
        nextTravel: travelsData.next,
        countriesCount: travelsHelper.countriesCount(),
        citiesCount: travelsData.oldTravels.length
      }
    }
  }
</script>

<template lang="pug">
  #header
    .social-icons
      a(href="https://tucci.me" target="_blank")
        i.icon.ion-home
      a(href="https://twitter.com/TucciMatias" target="_blank")
        i.icon.ion-social-twitter
      a(href="https://github.com/MatiasTucci/travels" target="_blank")
        i.icon.ion-social-github
    .travel-info
      .current
        i.icon.ion-ios-location
        p {{ currentPosition }}
      .next
        i.icon.ion-android-share
        p {{ nextTravel }}
    .statistics
      p {{ countriesCount }} Countries - {{ citiesCount }} Cities
</template>

<style lang="scss">
  @import "../styles/main.scss";

  #header {
    display: flex;
    position: relative;
    align-items: center;
    background-color: $primary-dark;
    box-sizing: border-box;
    color: #e6e7e9;
    width: 100%;
    height: 7vh;
    padding: 20px;
    z-index: 99999;
    top: 0;
    right: 0;
    -webkit-box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.5);

    a {
      color: #e6e7e9;
    }

    i.icon {
      margin-right: 10px;
    }

    .social-icons,
    .travel-info,
    .statistics {
      display: flex;
      flex: 1;
      a {
        transition: opacity .3s;
        &:hover {
          opacity: .6;
        }
      }
    }

    .social-icons {
      i.icon {
        margin-right: 15px;
      }
    }

    .travel-info {
      justify-content: center;
      .current, .next {
        display: flex;
        flex-direction: row;
        align-items: center;
        i {
          color: #fff;
        }
      }
    }
    
    .next {
      margin-left: 10px;
      i.icon.ion-plane {
        -ms-transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
      }
    }

    .statistics {
      justify-content: flex-end;
    }
  }
</style>
