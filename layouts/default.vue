<template>
  <div id="main" class="layout-electrobotik">
  <transition-group name="page">
    <electrobotik-menu/>
    <nuxt/>
  </transition-group>
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
