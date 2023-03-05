<script lang="ts" src="./MapView.ts"/>

<template>
    <h1>Vue Maps</h1>
    <p> 
        {{ isLoading }}
        {{ userLocation }}
        {{ isUserLocationReady }}
    </p>
    <div v-if="!isUserLocationReady" class="loading d-flex justify-content-center align-items-center">
        <div class="text-center">
            <h3>Espere por favor</h3>
            <span>Localizando...</span>
        </div>
    </div>

    <div v-show="isUserLocationReady"
        class="map-container"
        ref="mapElement"
    />
</template>

<style scoped>
.loading{
    color: white;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.8);
}

.map-container{
    position: fixed;
    width: 100vw;
    height: 100vh;
}

h1, p{
    text-align: center;
}
</style>