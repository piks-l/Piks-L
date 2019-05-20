<template>
  <div class="layout-electrobotik">
    <electrobotik-menu/>
    <nuxt id="main"/>
  </div>
</template>
<script>
  import $ from 'jquery'
  import electrobotikMenu from '~/components/ui/menu.vue'
  export default {
      transition: 'page',
      components: {
          electrobotikMenu
      },
      mounted: () => {
      }
  }
</script>
