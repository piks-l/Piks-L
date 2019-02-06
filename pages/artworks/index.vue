<template>
<div>
  <div class="container">
    <h2>ARTWORKS</h2>
  </div>
  <influx-artworks/>
</div>
</template>

<script>
  import $ from 'jquery'
  // import components
  import influxArtworks from '~/components/artworks.vue'
  // export
  export default {
    layout: 'default',
    components: {
        influxArtworks
    },
    mounted: () => {
      	
    }
  }
</script>
