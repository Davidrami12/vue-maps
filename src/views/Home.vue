<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script lang="ts">
import { usePlacesStore } from '@/composables';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeVue',
  components: { },
  setup(){
    
    usePlacesStore()
  
  }
});
</script>
