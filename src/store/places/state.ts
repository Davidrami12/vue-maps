export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number] // longitud, latitud
}

function state(): PlacesState {
    return {
        isLoading: true,
        userLocation: undefined,
    }
}

export default state;