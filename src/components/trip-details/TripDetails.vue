<template>
    <div v-if="distance" class="trip-container column">
        <div class="col">Distancia: <strong>{{ distance }} Kms</strong></div>
        <div class="col">Duración: <strong>{{ duration }} Horas</strong></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMapStore } from '../../composables/useMapStore';

export default defineComponent({
    name: 'TripDetails',
    setup(){

        const {distance, duration} = useMapStore()

        return{
            distance,
            duration
        }
    }
})

</script>

<style scoped>
.trip-container{
    padding: 10px;
    position: fixed;
    bottom: 50px;
    left: 20px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    width: 300px;
    font-size: 20px;
}

strong{
    color: #42b983;
}
</style>