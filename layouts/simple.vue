<template>
  <div id="main" class="layout-ea">
    <ea-background/>
    <ea-menu/>
    <nuxt/>
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
