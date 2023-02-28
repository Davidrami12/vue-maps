import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';


const actions: ActionTree<PlacesState, StateInterface> = {
    
    getInitialLocation( { commit } ) {
        // todo: colocar loading
        navigator.geolocation.getCurrentPosition(
            ( coords ) => commit('setLngLat', { lng: coords.coords.longitude, lat: coords.coords.latitude }),
            ( err ) => {
                console.log(err)
                throw new Error("No geolocation :( ")
            }
        )
    }
}



export default actions;