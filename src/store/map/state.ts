import mapboxgl from 'mapbox-gl';

export interface MapState {
    map?: mapboxgl.Map;
    markers: mapboxgl.Marker[];
    distance?: number;
    duration?: number;
}

function state(): MapState {
    return {
        map: undefined,
        markers: [],
        distance: undefined,
        duration: undefined
    }
}

export default state;