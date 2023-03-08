import { Feature } from '../../interfaces/places';
export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number] // longitud, latitud
    places: Feature[],
    isLoadingPlaces: boolean
}

function state(): PlacesState {
    return {
        isLoading: true,
        userLocation: undefined,
        places: [],
        isLoadingPlaces: false
    }
}

export default state;