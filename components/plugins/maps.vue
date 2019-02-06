<template>
  <div class="google-map" :class="{ active: openMap }" :id="mapName" @click="openMap = !openMap"></div>
</template>

<script>
  export default {
    name: 'google-map',
    props: ['name'],
    data: function () {
      return {
        openMap: false,
        mapName: this.name + "-map",
        markerCoordinates: [{
          latitude: 43.5993471,
          longitude: 1.4431301
        }]
      }
    },
    mounted: function () {
      const element = document.getElementById(this.mapName)
      const options = {
        zoom: 14,
        center: new google.maps.LatLng(43.5993471,1.4431301)
      }
      const map = new google.maps.Map(element, options);
      
      this.markerCoordinates.forEach((coord) => {
        const position = new google.maps.LatLng(coord.latitude, coord.longitude);
        const marker = new google.maps.Marker({ position, map });
      });

    }
  };
</script>

<style scoped>
  .google-map {
    width: 100%;
    height: 200px;
    margin: 0 auto;
    transition: 1s ease all;
  }
  .google-map.active {
    height: 350px;
  }
</style>
