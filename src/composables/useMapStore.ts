import { useStore } from 'vuex';
import { StateInterface } from '@/store';
import { computed } from 'vue';
import mapboxgl from 'mapbox-gl';



export const useMapStore = () => {
    
    const store = useStore<StateInterface>()
    
    return {
        map: computed( () => store.state.map.map ),
        distance: computed( () => store.state.map.distance ),
        duration: computed( () => store.state.map.duration ),
        
        // Mutations
        setMap: (map: mapboxgl.Map ) => store.commit('map/setMap', map),

        // Actions


        
    }
}