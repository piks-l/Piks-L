<template>
  <div id="main" class="layout-ea">
    <ea-menu/>
    <nuxt/>
  </div>
</template>
<script>
  import $ from 'jquery'
  import eaMenu from '~/components/ui/menu.vue'
  export default {
      transition: {
        name: 'page',
        mode: 'out-in'
      },
      components: {
          eaMenu
      },
      mounted () {
      }
  }
</script>
