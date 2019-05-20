<template>
  <div id="main" class="layout-electrobotik">
  <transition name="page">
    <electrobotik-menu/>
    <nuxt/>
  </transition>
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
