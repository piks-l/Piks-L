<template>
  <div id="main" class="layout-electrobotik">
    <electrobotik-menu/>
    <nuxt/>
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
      mounted () {
      }
  }
  
</script>
