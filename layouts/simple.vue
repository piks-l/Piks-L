<template>
  <div id="main" :class="'ea-layout-'+this.$route.name">
    <div class="ea_col mobile-menu">
      MENU
    </div>
    <div class="ea_col ui-left">
      <nuxt-link to="/"><ui-logo/></nuxt-link>
      <ui-menu class="ea-menu" />
    </div>
    <div class="ea_col ui-content">
      <nuxt/>
    </div>
    <div class="ea_col ui-right">
      <div class="deco-video">
        <video autoplay="autoplay" loop="loop" muted="muted">
          <source src="/videos/etiquette-noir.mp4" type="video/mp4">
        </video>
      </div>
    </div>
    <div class="ea_col ui-footer">
      <ui-footer/>
    </div>
    <ui-background/>
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
