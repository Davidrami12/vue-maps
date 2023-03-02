import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWRyYW1pMTIiLCJhIjoiY2xlcmowN25oMGM4YjN4cWo1d2VjdWtlbiJ9._i-alLPw_HV5Oaln2pNYtQ';


if(!navigator.geolocation){
    alert("Tu navegador no soporta el GeoLocation")
    throw new Error("Tu navegador no soporta el GeoLocation")
}


createApp(App).use(store).use(router).mount('#app')
