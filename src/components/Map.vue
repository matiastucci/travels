<script>
  import config from '@/services/config'
  import travelsData from '@/services/travels/index.json'

  export default {
    name: 'map',

    data () {
      return {
        mapsLoaded: false,
        interval: undefined,
        selectedTravel: undefined,
        travels: travelsData.oldTravels,
        map: {
          center: { lat: 0.0, lng: 0.0 },
          zoom: 3,
          options: {
            styles: config.map.style,
            mapTypeControl: false,
            fullscreenControl: false,
            streetViewControl: false,
            zoomControl: false
          }
        }
      }
    },

    created () {
      this.interval = setInterval(this.checkIfMapsLoaded, 500)
    },

    methods: {
      checkIfMapsLoaded () {
        if (window.google) {
          this.mapsLoaded = true
          clearInterval(this.interval)
        }
      },

      showTravelInfo (travel) {
        this.selectedTravel = travel
        // this.map.zoom = 5
        // this.map.center.lat = travel.coordinates.lat
        // this.map.center.lng = travel.coordinates.lng
      },

      hideTravelInfo () {
        // this.map.zoom = 3
        // this.map.center.lat = 0.0
        // this.map.center.lng = 0.0
        this.selectedTravel = undefined
      },

      moreZoom () {
        this.map.zoom = this.map.zoom + 1
      },

      lessZoom () {
        if (this.map.zoom === 2) return
        this.map.zoom = this.map.zoom - 1
      },

      getMarkerIcon (index) {
        return index === 0 ? {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: '#e6e7e9',
          fillOpacity: 1,
          strokeWeight: 1
        } : undefined
      },

      getMarkerAnimation (index) {
        return index === 0 ? window.google.maps.Animation.BOUNCE : null
      }
    }
  }
</script>

<template lang="pug">
  .map-container(v-if="mapsLoaded")
    transition(name="fade")
      .travel-info(v-if="selectedTravel")
        p {{ selectedTravel.city }}, {{ selectedTravel.country }} {{ selectedTravel.flag }}

    .zoom-control
      i.icon.ion-ios-minus(@click="lessZoom()")
      i.icon.ion-ios-plus(@click="moreZoom()")

    gmap-map(:center="map.center", :zoom="map.zoom", style="width: 100%; height: 100%", @click="hideTravelInfo()", :options="map.options")
      gmap-marker(:key="index", v-for="(m, index) in travels", :icon="getMarkerIcon(index)", :animation="getMarkerAnimation(index)" :position="m.coordinates", :clickable="true", @click="showTravelInfo(m)")
</template>

<style lang="scss" scoped>
  @import "../styles/variables.scss";

  .travel-info {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: $primary-dark;
    color: #e6e7e9;
    width: 300px;
    height: 50px;
    padding: 10px;
    z-index: 99999;
    left: 0;
    bottom: 0;
    -webkit-box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.3);
  }

  .zoom-control {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: $primary-dark;
    color: #e6e7e9;
    width: 200px;
    height: 50px;
    padding: 10px;
    z-index: 99999;
    right: 0;
    bottom: 0;
    font-size: 3em;
    -webkit-box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.3);

    i.icon {
      cursor: pointer;
      margin: 0 20px;
      transition: opacity .3s;
      &:hover {
        opacity: .6;
      }
    }
  }
</style>
