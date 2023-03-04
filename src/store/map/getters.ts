import { GetterTree } from 'vuex';
import { MapState } from './state';
import { StateInterface } from '../index';


const getters: GetterTree<MapState, StateInterface> = {
    someGetter( /* state */ ) {
        // return true;
    }
}



export default getters;