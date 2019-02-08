<template>
  <div>
    <influx-menu/>
    <nuxt/>
    <influx-footer/>
  </div>
</template>
<script>
  import $ from 'jquery'
  import influxMenu from '~/components/ui/menu.vue'
  import influxFooter from '~/components/ui/footer.vue'
  export default {
      transition: 'page',
      components: {
          influxMenu,
          influxFooter
      },
      head: {
        link: [
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Slabo+27px' }
        ]
      },
      mounted: () => {
          
      }
  }
</script>
<style>

</style>
