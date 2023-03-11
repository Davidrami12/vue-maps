import axios from 'axios'   

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiZGF2aWRyYW1pMTIiLCJhIjoiY2xlcmowN25oMGM4YjN4cWo1d2VjdWtlbiJ9._i-alLPw_HV5Oaln2pNYtQ'
    }
})

export default directionsApi;