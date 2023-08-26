<script lang="ts" src="./SearchResults.ts"/>

<template>
    
    <div v-if="isLoadingPlaces" class="alert alert-primary text-center">
        <h5>Loading...</h5>
        <span>Please, wait</span>
    </div>

    <ul v-else-if="places.length > 0" class="list-group mt-3">
        <li v-for="place in places" 
            :key="place.id" 
            @click="onPlaceClicked(place)" 
            class="list-group-item list-group-item-action" 
            :class="{ 'active': place.id === activePlace }">
            
            <h5>{{ place.text }}</h5>
            <p>{{ place.place_name }}</p>
            <div align="right">
                <button 
                    class="btn btn-outline-primary btn-sm"
                    :class="(place.id === activePlace) ? 'btn-outline-light' : 'btn-outline-primary'"
                    @click.self="getRouteDirections(place)">
                    Directions
                </button>
            </div>

        </li>
    </ul>

</template>

<style scoped>
li{
    cursor: pointer;
}

h5{
    font-size: 16px;
    font-weight: bold;
}

p{
    font-size: 12px;
}
</style>