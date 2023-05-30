<script setup>
// import mapboxgl from 'mapbox-gl';
import { onMounted } from 'vue';
import { ref } from 'vue';
const mapContainer = ref(null);
// onMounted(() => {
//   mapboxgl.accessToken = 'pk.eyJ1IjoieGlhb3hpYW9mYW4iLCJhIjoiY2t0OXo1dnlsMWgxMjJucTJ4OTFoc2g3MyJ9.qmpRqRy4zq0zZflGMv942Q';
//   const map = new mapboxgl.Map({
//     container: mapContainer.value, // container ID
//     style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
//     center: [119.97, 31.81], // starting position [lng, lat]
//     zoom: 15, // starting zoom
//   });
// });
</script>

<template>
  <div id="map" ref="mapContainer"></div>
</template>

<style lang="scss" scoped>
#map {
  width: 500px;
  height: 300px;
}
</style>
