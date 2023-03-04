<template>

  <MapView/>

  <MyLocationBtn/>

</template>

<script lang="ts">
import MapView from '@/components/mapview/MapView.vue';
import MyLocationBtn from '@/components/my-location-btn/MyLocationBtn.vue';
import { usePlacesStore } from '@/composables';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeVue',
  components: { MapView, MyLocationBtn },
  setup(){
    
    usePlacesStore()
  
  }
});
</script>
