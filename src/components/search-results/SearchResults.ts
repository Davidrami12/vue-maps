import { watch, defineComponent, onMounted, ref } from 'vue';
import { usePlacesStore, useMapStore } from '@/composables';
import { Feature } from '@/interfaces/places';


export default defineComponent({
    name: 'SearchResults',
    setup(){

        const { isLoadingPlaces, places } = usePlacesStore()
        const { map, setPlaceMarkers } = useMapStore()
        const activePlace = ref('')

        watch( places, (newPlaces) => {
            // convertir lugares en marcadores en las mutaciones del mapa
            activePlace.value = ''
            setPlaceMarkers(newPlaces)
        } )


        return{
            isLoadingPlaces,
            places,
            activePlace,

            onPlaceClicked: ( place: Feature ) => {
                activePlace.value = place.id

                const [lng, lat] = place.center

                map.value?.flyTo({
                    center: [lng, lat],
                    zoom: 14
                })
            }
        }
    }
})