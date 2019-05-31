<template>
  <div id="main" class="layout-ea">
    <ea-logo/>
    <ea-menu/>
    <nuxt/>
    <ea-background/>
  </div>
</template>
<script>
  import $ from 'jquery'
  import eaLogo from '~/components/ui/logo.vue'
  import eaMenu from '~/components/ui/menu.vue'
  import eaBackground from '~/components/ui/background.vue'
  export default {
      transition: 'page',
      components: {
          eaLogo,
          eaMenu,
          eaBackground
      },
      mounted () {
      }
  }
</script>
