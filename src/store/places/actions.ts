import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';


const actions: ActionTree<PlacesState, StateInterface> = {
    someAction( /*{ commit }, payload  */ ) {
        // a line to prevent linter errors
    }
}



export default actions;