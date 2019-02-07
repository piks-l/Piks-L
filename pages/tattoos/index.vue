<template>
<div>
  <div class="container border">
    <h2>TATTOOS</h2>
  </div>
  <influx-tattoos/> 
</div>
</template>

<script>
  import $ from 'jquery'
  // import components
  import influxTattoos from '~/components/tattoos.vue'
  // export
  export default {
    layout: 'default',
    components: {
        influxTattoos
    },
    mounted: () => {
      	
    }
  }
</script>
