<template>
  <div id="main" class="layout-ea">
    <ea-menu/>
    <nuxt/>
    <ea-background/>
  </div>
</template>
<script>
  import $ from 'jquery'
  import eaMenu from '~/components/ui/menu.vue'
  import eaBackground from '~/components/ui/background.vue'
  export default {
      transition: 'page',
      components: {
          eaMenu,
          eaBackground
      },
      mounted () {
      }
  }
</script>
