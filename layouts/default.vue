<template>
  <div id="main" class="ea-layout">
    <header class="ea-ui">
      <ui-loading/>
      <ui-background/>
      <ui-logo/>
      <ui-menu class="ea-menu" />
    </header>
    <nuxt/>
  </div>
</template>
<script>
  import $ from 'jquery'
  import uiLoading from '~/components/ui/loading.vue'
  import uiLogo from '~/components/ui/logo.vue'
  import uiMenu from '~/components/ui/menu.vue'
  import uiBackground from '~/components/ui/background.vue'
  export default {
      components: {
          uiLoading,
          uiLogo,
          uiMenu,
          uiBackground
      },
      mounted () {
      }
  }
</script>
