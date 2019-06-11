<template>
  <div id="main" class="ea-layout">
    <header class="ea-ui">
      <ui-loading/>
      <ui-background/>
      <nuxt-link to="/" class="ea-logo"><ui-logo/></nuxt-link>
      <div class="deco-video">
          <video autoplay="autoplay" loop="loop" muted="muted">
            <source src="/videos/etiquette-noir.mp4" type="video/mp4">
          </video>
      </div>
      <div class="ea-tv">
          <a href="#" alt="EATV">#EA<span>TV</span></a>
      </div>
      <ui-menu class="ea-menu" />
    </header>
    <nuxt/>
    <ui-footer/>
  </div>
</template>
<script>
  import $ from 'jquery'
  import uiLoading from '~/components/ui/loading.vue'
  import uiLogo from '~/components/ui/logo.vue'
  import uiMenu from '~/components/ui/menu.vue'
  import uiFooter from '~/components/ui/footer.vue'
  import uiBackground from '~/components/ui/background.vue'
  export default {
      components: {
          uiLoading,
          uiLogo,
          uiMenu,
          uiFooter,
          uiBackground
      },
      mounted () {
      }
  }
</script>
