<template>
  <div class="layout-influx">
    <influx-menu/>
    <influx-header/>
    <nuxt/>
    <influx-footer/>
    <influx-cursor/>
  </div>
</template>
<script>
  import $ from 'jquery'
  import influxMenu from '~/components/ui/menu.vue'
  import influxHeader from '~/components/ui/header.vue'
  import influxFooter from '~/components/ui/footer.vue'
  import influxCursor from '~/components/ui/cursor.vue'
  export default {
      transition: 'page',
      components: {
          influxMenu,
          influxHeader,
          influxFooter,
          influxCursor
      },
      mounted: () => {
          
      }
  }
</script>
