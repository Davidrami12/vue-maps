import { watch, defineComponent, onMounted, ref, computed } from 'vue';
import SearchResults from '@/components/search-results/SearchResults.vue';
import { usePlacesStore } from '../../composables/usePlacesStore';



export default defineComponent({
    name: 'SearchBar',
    components: { SearchResults },
    setup(){

        const searcherTimeout = ref()
        const searcherValue = ref('')

        const { searchPlacesByTerm } = usePlacesStore()


        return{
            searcherValue,

            searchTerm: computed({
                get(){
                    return searcherValue.value
                },
                set(val: string){

                    // cada vez que la persona escriba algo va a limpiar el timeout
                    if( searcherTimeout.value ) clearTimeout( searcherTimeout.value )

                    searcherTimeout.value = setTimeout(() => {
                        searcherValue.value = val
                        searchPlacesByTerm(val)
                    }, 1000);
                }
            })
        }
    }
})