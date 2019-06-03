<template>
  <div id="main" class="layout-ea">
    <ea-background/>
    <ea-logo/>
    <ea-menu/>
    <nuxt/>
  </div>
</template>
<script>
  import $ from 'jquery'
  import eaLogo from '~/components/ui/logo.vue'
  import eaMenu from '~/components/ui/menu.vue'
  import eaBackground from '~/components/ui/background.vue'
  export default {
      transition: {
        name: 'intro'
      },
      components: {
          eaLogo,
          eaMenu,
          eaBackground
      },
      mounted () {
      }
  }
</script>
