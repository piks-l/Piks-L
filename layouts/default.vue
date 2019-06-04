<template>
  <div id="main" class="layout-ea">
    <div class="ui-ea">
      <ea-background/>
      <ea-logo/>
      <ea-menu/>
    </div>
    <nuxt/>
  </div>
</template>
<script>
  import $ from 'jquery'
  import eaLogo from '~/components/ui/logo.vue'
  import eaMenu from '~/components/ui/menu.vue'
  import eaBackground from '~/components/ui/background.vue'
  export default {
      components: {
          eaLogo,
          eaMenu,
          eaBackground
      },
      mounted () {
      }
  }
</script>
