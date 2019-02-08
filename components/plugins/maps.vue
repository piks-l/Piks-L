<template>
  <section class="google-map" :id="mapName"></section>
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
        zoom: 16,
        mapTypeControl: false,
        zoomControl: false,
        center: new google.maps.LatLng(43.5993471,1.4431301)
      }
      const map = new google.maps.Map(element, options);
      
      var iconBase = 'https://influx-002.netlify.com/images/uploads/icons-map.png';

      this.markerCoordinates.forEach((coord) => {
        const position = new google.maps.LatLng(coord.latitude, coord.longitude);
        const marker = new google.maps.Marker({ position, map, icon: iconBase });
      });

    }
  };
</script>

<style scoped>
  .google-map {
    width:100%;
    height:250px;
    margin:0 auto;
    opacity:1;
    filter:grayscale(1);
  }
</style>
