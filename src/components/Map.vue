<script>
  import config from '@/services/config'
  import travelsData from '@/services/travels/index.json'

  export default {
    name: 'map',

    data () {
      return {
        mapsLoaded: false,
        interval: undefined,
        timeout: undefined,
        selectedTravel: undefined,
        map: undefined,
        travels: travelsData.oldTravels,
        mapOptions: {
          center: { lat: 0.0, lng: 0.0 },
          zoom: 3,
          options: {
            styles: config.map.style,
            mapTypeControl: false,
            fullscreenControl: false,
            streetViewControl: false,
            zoomControl: false
          }
        },
        tooltipPos: {
          left: 0,
          bottom: 0
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
          this.$nextTick(() => {
            this.$refs.gmap.$mapCreated.then(map => {
              this.map = map
            })
          })
          clearInterval(this.interval)
        }
      },

      hideTooltip () {
        this.selectedTravel = undefined
      },

      moreZoom () {
        this.mapOptions.zoom = this.mapOptions.zoom + 1
      },

      lessZoom () {
        if (this.mapOptions.zoom === 2) return
        this.mapOptions.zoom = this.mapOptions.zoom - 1
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
      },

      getMarkerZIndex (index) {
        return index === 0 ? 99999 : 90
      },

      showTooltip (m) {
        clearTimeout(this.timeout)
        const latLng = new window.google.maps.LatLng(m.coordinates.lat, m.coordinates.lng)
        const pos = this.fromLatLngToPoint(latLng)
        this.tooltipPos.left = `${pos.x - 125}px`
        this.tooltipPos.top = `${pos.y + 60}px`
        this.selectedTravel = m
        this.timeout = setTimeout(() => {
          this.hideTooltip()
        }, 1500)
      },

      fromLatLngToPoint (latLng) {
        const topRight = this.map.getProjection().fromLatLngToPoint(this.map.getBounds().getNorthEast())
        const bottomLeft = this.map.getProjection().fromLatLngToPoint(this.map.getBounds().getSouthWest())
        const scale = Math.pow(2, this.map.getZoom())
        const worldPoint = this.map.getProjection().fromLatLngToPoint(latLng)
        return new window.google.maps.Point((worldPoint.x - bottomLeft.x) * scale, (worldPoint.y - topRight.y) * scale)
      }
    }
  }
</script>

<template lang="pug">
  .map-container(v-if="mapsLoaded")
    transition(name="fade")
      .travel-info(v-if="selectedTravel", :style='tooltipPos')
        p {{ selectedTravel.city }}, {{ selectedTravel.country }} {{ selectedTravel.flag }}

    .zoom-control
      i.icon.ion-ios-minus(@click="lessZoom()")
      i.icon.ion-ios-plus(@click="moreZoom()")

    gmap-map(
      ref          = "gmap",
      :center      = "mapOptions.center",
      :zoom        = "mapOptions.zoom",
      style        = "width: 100%; height: 100%",
      @drag        = "hideTooltip()",
      @click       = "hideTooltip()",
      @zoomChanged = "hideTooltip()",
      :options     = "mapOptions.options"
    )
      gmap-marker(
        :key       = "index",
        @mouseover = 'showTooltip(m)',
        v-for      = "(m, index) in travels",
        :icon      = "getMarkerIcon(index)",
        :animation = "getMarkerAnimation(index)"
        :position  = "m.coordinates",
        :clickable = "true",
        :zIndex    = "getMarkerZIndex(index)"
        @click     = "showTooltip(m)"
      )
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
    width: 250px;
    height: 50px;
    padding: 10px;
    z-index: 99999;
    box-sizing: border-box;
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
