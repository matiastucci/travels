webpackJsonp([1],{"/I2/":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"header"}},[a("travels-modal"),t._m(0,!1,!1),a("div",{staticClass:"travel-info"},[a("div",{staticClass:"current"},[a("i",{staticClass:"icon ion-ios-location"}),a("p",[t._v(t._s(t.currentPosition))])]),a("div",{staticClass:"next"},[a("i",{staticClass:"icon ion-android-share"}),a("p",[t._v(t._s(t.nextTravel))])])]),a("div",{staticClass:"statistics"},[a("p",{on:{click:t.showCountriesModal}},[t._v(t._s(t.countriesCount)+" Countries - "+t._s(t.citiesCount)+" Cities")])])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"social-icons"},[a("a",{attrs:{href:"https://tucci.me",target:"_blank"}},[a("i",{staticClass:"icon ion-home"})]),a("a",{attrs:{href:"https://twitter.com/TucciMatias",target:"_blank"}},[a("i",{staticClass:"icon ion-social-twitter"})]),a("a",{attrs:{href:"https://github.com/MatiasTucci/travels",target:"_blank"}},[a("i",{staticClass:"icon ion-social-github"})])])}],o={render:n,staticRenderFns:r};e.a=o},"/yRs":function(t,e,a){"use strict";function n(t){a("T/Ix")}Object.defineProperty(e,"__esModule",{value:!0});var r=a("diQi"),o=a.n(r),s=a("FIJ3"),l=a("VU/8"),i=n,c=l(o.a,s.a,!1,i,null,null);e.default=c.exports},"1p26":function(t,e,a){"use strict";var n=a("QtpQ"),r=a.n(n);e.a={name:"listModal",data:function(){return{travels:r.a.oldTravels.reverse()}}}},"3GDu":function(t,e,a){"use strict";function n(t){a("kRpj")}var r=a("fGNU"),o=a("dgF9"),s=a("VU/8"),l=n,i=s(r.a,o.a,!1,l,"data-v-0fd36c78",null);e.a=i.exports},"3y59":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[a("span",{domProps:{textContent:t._s(t.label)}}),t._v(" "),a("input",{ref:"input",class:t.className,attrs:{type:"text",placeholder:t.placeholder}})])},r=[],o={render:n,staticRenderFns:r};e.a=o},"5ZbH":function(t,e,a){"use strict";function n(t){a("Ybha")}Object.defineProperty(e,"__esModule",{value:!0});var r=a("kXiA"),o=a.n(r),s=a("KrRW"),l=a("VU/8"),i=n,c=l(o.a,s.a,!1,i,null,null);e.default=c.exports},"5cLx":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Vj7G"),r=a.n(n),o=a("r/ZB"),s=a("VU/8"),l=s(r.a,o.a,!1,null,null,null);e.default=l.exports},"7DBO":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("custom-header"),a("router-view",{staticClass:"router-view"})],1)},r=[],o={render:n,staticRenderFns:r};e.a=o},"9KLx":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{attrs:{name:"travels-modal"}},[a("div",{staticClass:"container"},t._l(t.travels,function(e,n){return a("div",{key:n,staticClass:"item"},[a("div",{staticClass:"flag"},[a("span",[t._v(t._s(e.flag))])]),a("div",{staticClass:"city"},[a("span",[t._v(t._s(e.city)+",")])]),a("div",{staticClass:"country"},[a("span",[t._v(t._s(e.country))])])])}))])},r=[],o={render:n,staticRenderFns:r};e.a=o},"9frk":function(t,e){},FIJ3:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-street-view-pano-container"},[a("div",{ref:"vue-street-view-pano",staticClass:"vue-street-view-pano"}),t._v(" "),t._t("default")],2)},r=[],o={render:n,staticRenderFns:r};e.a=o},HCTz:function(t,e,a){"use strict";var n=a("QtpQ"),r=a.n(n),o=a("nDMa"),s=a("NsEx");e.a={name:"header",components:{travelsModal:s.a},data:function(){return{currentPosition:r.a.current,nextTravel:r.a.next,countriesCount:o.a.countriesCount(),citiesCount:r.a.oldTravels.length}},methods:{showCountriesModal:function(){this.$modal.show("travels-modal")}}}},KrRW:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-map-container"},[a("div",{ref:"vue-map",staticClass:"vue-map"}),t._v(" "),a("div",{staticClass:"vue-map-hidden"},[t._t("default")],2),t._v(" "),t._t("visible")],2)},r=[],o={render:n,staticRenderFns:r};e.a=o},M93x:function(t,e,a){"use strict";function n(t){a("9frk")}var r=a("xJD8"),o=a("7DBO"),s=a("VU/8"),l=n,i=s(r.a,o.a,!1,l,null,null);e.a=i.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r=a("M93x"),o=a("YaEn"),s=a("sA6N"),l=(a.n(s),a("rifk")),i=a.n(l),c=a("TJR/");n.a.config.productionTip=!1,n.a.use(s,{load:{key:c.a.map.key,libraries:"places"}}),n.a.use(i.a),new n.a({el:"#app",router:o.a,template:"<App/>",components:{App:r.a}})},NsEx:function(t,e,a){"use strict";function n(t){a("vMso")}var r=a("1p26"),o=a("9KLx"),s=a("VU/8"),l=n,i=s(r.a,o.a,!1,l,"data-v-6dec883b",null);e.a=i.exports},QtpQ:function(t,e){t.exports={current:"Prague, CZE",next:"Athens, GRC",oldTravels:[{year:"2007",city:"Santiago",country:"CHL",flag:"🇨🇱",coordinates:{lat:-33.4378305,lng:-70.65044920000003}},{year:"2007",city:"Chillan",country:"CHL",flag:"🇨🇱",coordinates:{lat:-36.60626179999999,lng:-72.1023351}},{year:"2014",city:"La Paz",country:"BOL",flag:"🇧🇴",coordinates:{lat:-15.0892416,lng:-68.52471489999999}},{year:"2014",city:"Copacabana",country:"BOL",flag:"🇧🇴",coordinates:{lat:-16.1662935,lng:-69.08615680000003}},{year:"2014",city:"Cusco",country:"PER",flag:"🇵🇪",coordinates:{lat:-13.53195,lng:-71.96746259999998}},{year:"2005",city:"Santa Helena",country:"BRA",flag:"🇧🇷",coordinates:{lat:-24.8584188,lng:-54.336434800000006}},{year:"2015",city:"Cartagena",country:"COL",flag:"🇨🇴",coordinates:{lat:10.400234,lng:-75.50852499999996}},{year:"2016",city:"Madrid",country:"ESP",flag:"🇪🇸",coordinates:{lat:40.4167754,lng:-3.7037901999999576}},{year:"2016",city:"Amsterdam",country:"NLD",flag:"🇳🇱",coordinates:{lat:52.3702157,lng:4.895167899999933}},{year:"2016",city:"Rome",country:"ITA",flag:"🇮🇹",coordinates:{lat:41.90278349999999,lng:12.496365500000024}},{year:"2016",city:"Florence",country:"ITA",flag:"🇮🇹",coordinates:{lat:43.7695604,lng:11.25581360000001}},{year:"2016",city:"Venice",country:"ITA",flag:"🇮🇹",coordinates:{lat:45.4930475,lng:12.417700299999979}},{year:"2016",city:"Paris",country:"FRA",flag:"🇫🇷",coordinates:{lat:48.85661400000001,lng:2.3522219000000177}},{year:"2016",city:"Cavtat",country:"HRV",flag:"🇭🇷",coordinates:{lat:42.5812683,lng:18.217594100000042}},{year:"2016",city:"Dubrovnik",country:"HRV",flag:"🇭🇷",coordinates:{lat:42.65066059999999,lng:18.09442379999996}},{year:"2016",city:"Split",country:"HRV",flag:"🇭🇷",coordinates:{lat:43.5081323,lng:16.440193499999964}},{year:"2016",city:"Sesimbra",country:"PRT",flag:"🇵🇹",coordinates:{lat:38.44421699999999,lng:-9.101490300000023}},{year:"2016",city:"Naples",country:"ITA",flag:"🇮🇹",coordinates:{lat:40.901975,lng:14.33264399999996}},{year:"2016",city:"Pompeii",country:"ITA",flag:"🇮🇹",coordinates:{lat:40.7466508,lng:14.4761726}},{year:"2016",city:"Kuala Lumpur",country:"MYS",flag:"🇲🇾",coordinates:{lat:3.139003,lng:101.68685499999992}},{year:"2016",city:"Tioman",country:"MYS",flag:"🇲🇾",coordinates:{lat:2.7902494,lng:104.16984630000002}},{year:"2016",city:"Ko Samui",country:"THA",flag:"🇹🇭",coordinates:{lat:9.5120168,lng:100.01359290000005}},{year:"2016",city:"Ko Tao",country:"THA",flag:"🇹🇭",coordinates:{lat:10.0993587,lng:99.83004840000001}},{year:"2017",city:"New York",country:"USA",flag:"🇺🇸",coordinates:{lat:40.7127837,lng:-74.00594130000002}},{year:"2017",city:"Los Angeles",country:"USA",flag:"🇺🇸",coordinates:{lat:34.0522342,lng:-118.2436849}},{year:"2017",city:"San Francisco",country:"USA",flag:"🇺🇸",coordinates:{lat:37.7749295,lng:-122.41941550000001}},{year:"2017",city:"Las Vegas",country:"USA",flag:"🇺🇸",coordinates:{lat:36.1699412,lng:-115.13982959999998}},{year:"2017",city:"New Jersey",country:"USA",flag:"🇺🇸",coordinates:{lat:40.0583238,lng:-74.4056612}},{year:"2017",city:"Palermo",country:"ITA",flag:"🇮🇹",coordinates:{lat:38.1156879,lng:13.361267099999964}},{year:"2017",city:"Montevideo",country:"URY",flag:"🇺🇾",coordinates:{lat:-34.9011127,lng:-56.16453139999999}},{city:"Mendoza",country:"ARG",flag:"🇦🇷",coordinates:{lat:-32.8894587,lng:-68.84583859999998}},{city:"Iguazú, Misiónes",country:"ARG",flag:"🇦🇷",coordinates:{lat:-25.8482523,lng:-54.346715200000006}},{city:"Entre Rios",country:"ARG",flag:"🇦🇷",coordinates:{lat:-31.7746654,lng:-60.49564609999999}},{city:"Córdoba",country:"ARG",flag:"🇦🇷",coordinates:{lat:-31.42008329999999,lng:-64.18877609999998}},{city:"Entre Rios",country:"ARG",flag:"🇦🇷",coordinates:{lat:-31.7746654,lng:-60.49564609999999}},{city:"Villa La Angostura",country:"ARG",flag:"🇦🇷",coordinates:{lat:-40.7627426,lng:-71.64179839999997}},{city:"Budapest",country:"HUN",flag:"🇭🇺",coordinates:{lat:47.497912,lng:19.04023499999994}},{city:"Prague",country:"CZE",flag:"🇨🇿",coordinates:{lat:50.0596696,lng:14.4656239}}]}},"T/Ix":function(t,e){},"TJR/":function(t,e,a){"use strict";var n=a("jq9O"),r={map:{key:"AIzaSyDXQlZgfsVbKIP_G_DgL0X60wZs2BEVmf4",style:n.a}};e.a=r},YI6p:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("jIen"),r=a.n(n),o=a("3y59"),s=a("VU/8"),l=s(r.a,o.a,!1,null,null,null);e.default=l.exports},YaEn:function(t,e,a){"use strict";var n=a("7+uW"),r=a("/ocq"),o=a("3GDu");n.a.use(r.a),e.a=new r.a({mode:"history",routes:[{path:"/",name:"Map",component:o.a}]})},Ybha:function(t,e){},dgF9:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.mapsLoaded?a("div",{staticClass:"map-container"},[a("transition",{attrs:{name:"fade"}},[t.selectedTravel?a("div",{staticClass:"travel-info"},[a("p",[t._v(t._s(t.selectedTravel.city)+", "+t._s(t.selectedTravel.country)+" "+t._s(t.selectedTravel.flag))])]):t._e()]),a("div",{staticClass:"zoom-control"},[a("i",{staticClass:"icon ion-ios-minus",on:{click:function(e){t.lessZoom()}}}),a("i",{staticClass:"icon ion-ios-plus",on:{click:function(e){t.moreZoom()}}})]),a("gmap-map",{staticStyle:{width:"100%",height:"100%"},attrs:{center:t.map.center,zoom:t.map.zoom,options:t.map.options},on:{click:function(e){t.hideTravelInfo()}}},t._l(t.travels,function(e,n){return a("gmap-marker",{key:n,attrs:{icon:t.getMarkerIcon(n),animation:t.getMarkerAnimation(n),position:e.coordinates,clickable:!0},on:{click:function(a){t.showTravelInfo(e)}}})}))],1):t._e()},r=[],o={render:n,staticRenderFns:r};e.a=o},doCN:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{ref:"input",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.value}})},r=[],o={render:n,staticRenderFns:r};e.a=o},fGNU:function(t,e,a){"use strict";var n=a("TJR/"),r=a("QtpQ"),o=a.n(r);e.a={name:"map",data:function(){return{mapsLoaded:!1,interval:void 0,selectedTravel:void 0,travels:o.a.oldTravels,map:{center:{lat:0,lng:0},zoom:3,options:{styles:n.a.map.style,mapTypeControl:!1,fullscreenControl:!1,streetViewControl:!1,zoomControl:!1}}}},created:function(){this.interval=setInterval(this.checkIfMapsLoaded,500)},methods:{checkIfMapsLoaded:function(){window.google&&(this.mapsLoaded=!0,clearInterval(this.interval))},showTravelInfo:function(t){this.selectedTravel=t},hideTravelInfo:function(){this.selectedTravel=void 0},moreZoom:function(){this.map.zoom=this.map.zoom+1},lessZoom:function(){2!==this.map.zoom&&(this.map.zoom=this.map.zoom-1)},getMarkerIcon:function(t){return 0===t?{path:window.google.maps.SymbolPath.CIRCLE,scale:8,fillColor:"#e6e7e9",fillOpacity:1,strokeWeight:1}:void 0},getMarkerAnimation:function(t){return 0===t?window.google.maps.Animation.BOUNCE:null}}}},jq9O:function(t,e,a){"use strict";e.a=[{elementType:"geometry",stylers:[{color:"#191b1d"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{elementType:"labels.text.stroke",stylers:[{color:"#191b1d"}]},{featureType:"administrative",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#EF2D56"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#EF2D56"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#263c3f"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"road",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#EF2D56"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}]},kRpj:function(t,e){},nDMa:function(t,e,a){"use strict";var n=a("QtpQ"),r=a.n(n),o={};o.countriesCount=function(){var t=[];return r.a.oldTravels.forEach(function(e){-1===t.indexOf(e.country)&&t.push(e.country)}),t.length},e.a=o},preG:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("osty"),r=a.n(n),o=a("doCN"),s=a("VU/8"),l=s(r.a,o.a,!1,null,null,null);e.default=l.exports},"r/ZB":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{ref:"flyaway"},[t._t("default")],2)])},r=[],o={render:n,staticRenderFns:r};e.a=o},rpYK:function(t,e){},teIl:function(t,e,a){"use strict";function n(t){a("rpYK")}var r=a("HCTz"),o=a("/I2/"),s=a("VU/8"),l=n,i=s(r.a,o.a,!1,l,null,null);e.a=i.exports},vMso:function(t,e){},xJD8:function(t,e,a){"use strict";var n=a("teIl");e.a={name:"app",components:{customHeader:n.a}}}},["NHnr"]);
//# sourceMappingURL=app.0e5c5ece2ae4796f1f56.js.map