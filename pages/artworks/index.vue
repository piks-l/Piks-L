<template>
<div>
  <div class="container border">
    <h2>ARTWORKS</h2>
  </div>
  <cdm-artworks/>
</div>
</template>

<script>
  import $ from 'jquery'
  // import components
  import cdmArtworks from '~/components/artworks.vue'
  // export
  export default {
    layout: 'default',
    components: {
        cdmArtworks
    },
    mounted: () => {
      	
    }
  }
</script>
