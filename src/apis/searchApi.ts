import axios from 'axios'   

const searchAPI = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiZGF2aWRyYW1pMTIiLCJhIjoiY2xlcmowN25oMGM4YjN4cWo1d2VjdWtlbiJ9._i-alLPw_HV5Oaln2pNYtQ'
    }
})

export default searchAPI;