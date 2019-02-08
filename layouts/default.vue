<template>
  <div>
    <influx-menu/>
    <influx-header/>
    <nuxt/>
    <influx-footer/>
  </div>
</template>
<script>
  import $ from 'jquery'
  import influxMenu from '~/components/ui/menu.vue'
  import influxHeader from '~/components/ui/header.vue'
  import influxFooter from '~/components/ui/footer.vue'
  export default {
      transition: 'page',
      components: {
          influxMenu,
          influxHeader,
          influxFooter
      },
      mounted: () => {
          
      }
  }
</script>
<style>

</style>
