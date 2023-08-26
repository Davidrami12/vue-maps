import { MutationTree } from 'vuex';
import { MapState } from './state';
import mapboxgl from 'mapbox-gl';
import { Feature } from '../../interfaces/places';


const mutation: MutationTree<MapState> = {
    setMap( state, map: mapboxgl.Map ) {
        state.map = map;
    },



    setDistanceDuration(state, {distance, duration}: {distance:number, duration: number}){
        let kms = distance / 1000
        kms = Math.round(kms * 100)
        kms /= 100

        state.distance = kms
        state.duration = Math.floor((duration / 60 / 60) * 100) / 100

    },



    setPlaceMarkers( state, places: Feature[] ){

        if(!state.map) return;
        
        // Remove markers
        state.markers.forEach(marker => marker.remove())
        state.markers = []
    
        // Create new markers
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

        // Remove polyline
        if(state.map.getLayer('RouteString')){
            state.map.removeLayer('RouteString')
            state.map.removeSource('RouteString')
            state.distance = undefined
            state.duration = undefined
        }
    },



    setRoutePolyline( state, coords: number[][] ){

        const start = coords[0];
        const end = coords[coords.length - 1]

        // Define bounds (map content)
        const bounds = new mapboxgl.LngLatBounds(
            [start[0], start[1]],
            [start[0], start[1]],
        )

        // Add each point to bounds
        for(const coord of coords){
            const newCoord: [number, number] = [coord[0], coord[1]]
            bounds.extend(newCoord)
        }

        state.map?.fitBounds(bounds, {
            padding: 200
        })

        // Polyline
        const sourceData: mapboxgl.AnySourceData = {
            type: 'geojson',
            data:{
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'LineString',
                            coordinates: coords
                        }
                    }
                ]
            }
        }

        if(state.map?.getLayer('RouteString')){
            state.map.removeLayer('RouteString')
            state.map.removeSource('RouteString') 
        }

        state.map?.addSource('RouteString', sourceData)

        state.map?.addLayer({
            id: 'RouteString',
            type: 'line',
            source: 'RouteString',
            layout: {
                'line-cap': 'round',
                'line-join': 'round'
            },
            paint: {
                'line-color': '#41B883',
                'line-width': 3
            }
        })
        
    }
}


export default mutation;