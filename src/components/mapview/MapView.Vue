<script lang="ts" src="./MapView.ts"/>

<template>
    
    <!--<h1>Vue Maps</h1>
        <p> 
            {{ userLocation }}
        </p>-->

    <div v-if="!isUserLocationReady" class="loading d-flex justify-content-center align-items-center">
        <div class="text-center">
            <h3>Espere por favor</h3>
            <span>Localizando...</span>
        </div>
    </div>

    <div v-show="isUserLocationReady"
    
        class="map-container"
        ref="mapElement"
    >
        
    </div>
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
    display: inline-block;
}

/*h1{
    text-align: center;
    font-weight: bold;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: rgb(1, 89, 1);
    background-color: transparent;
    z-index: -1;
    display: inline-block;
}

p{
    text-align: center;
    color: gray;
    background-color: transparent;
}*/
</style>