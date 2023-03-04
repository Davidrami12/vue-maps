import { watch, defineComponent, onMounted, ref } from 'vue';
import { usePlacesStore } from '../../composables/usePlacesStore';
import mapboxgl from 'mapbox-gl';

export default defineComponent({
    name: 'MapView',
    setup(){

        const mapElement = ref<HTMLDivElement>()
        const { isLoading, userLocation, isUserLocationReady } = usePlacesStore()

        const initMap = async () => {
            if (!mapElement.value) throw new Error("Div element no existe")
            if (!userLocation.value) throw new Error("user location no existe")

            await Promise.resolve()

            const map = new mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: userLocation.value,// [-74.5, 40], // starting position [lng, lat]
                zoom: 10, // starting zoom
            });

            const myLocationPopup = new mapboxgl.Popup({offset: [0, -25]})
                .setLngLat(userLocation.value)
                .setHTML(`<h4>You are here!</h4>`)

            const myLocationMarker = new mapboxgl.Marker()
                .setPopup(myLocationPopup)
                .setLngLat(userLocation.value)
                .addTo(map)
        }

        onMounted( () => {
            if(isUserLocationReady.value) 
                return initMap()
        })

        watch(isUserLocationReady, (newVal) => {
            if(isUserLocationReady) initMap()
        })
        
        return {
            isLoading,
            userLocation,
            isUserLocationReady,
            mapElement
        }
    }
})