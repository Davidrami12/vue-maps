import { MutationTree } from 'vuex';
import { MapState } from './state';
import mapboxgl from 'mapbox-gl';
import { Feature } from '../../interfaces/places';


const mutation: MutationTree<MapState> = {
    setMap( state, map: mapboxgl.Map ) {
        state.map = map;
    },

    setPlaceMarkers( state, places: Feature[] ){

        if(!state.map) return;
        
        // Borrar marcadores
        state.markers.forEach(marker => marker.remove())
        state.markers = []
    
        // Crear los nuevos marcadores
        for (const place of places) {
            const [ lng, lat ] = place.center

            const popup = new mapboxgl.Popup({offset: [0, -25]})
            .setLngLat([lng, lat])
            .setHTML(`<h4>${ place.text }</h4><p>${ place.place_name }</p>`)

            const marker = new mapboxgl.Marker()
                .setPopup(popup)
                .setLngLat([ lng, lat ])
                .addTo(state.map!)
            
            state.markers.push(marker)
        }
    }
}


export default mutation;