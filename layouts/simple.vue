<template>
  <div id="main" class="layout-ea">
    <ea-logo/>
    <ea-menu/>
    <nuxt class="main-evenements"/>
  </div>
</template>
<script>
  import $ from 'jquery'
  import eaLogo from '~/components/ui/logo.vue'
  import eaMenu from '~/components/ui/menu.vue'
  export default {
      components: {
          eaLogo,
          eaMenu
      },
      mounted () {
      }
  }
</script>
