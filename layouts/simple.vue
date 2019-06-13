<template>
  <div id="main" class="ea-layout">
    <header class="ea-ui">
      <ui-loading/>
      <ui-background/>
      <nuxt-link to="/"><ui-logo/></nuxt-link>
      <div class="deco-video">
          <video autoplay="autoplay" loop="loop" muted="muted">
            <source src="/videos/etiquette-noir.mp4" type="video/mp4">
          </video>
      </div>
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
