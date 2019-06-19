<template>
  <div id="main" :class="'ea-layout-'+this.$route.name">
    <header class="ea-ui">
      <ui-loading/>
      <ui-background/>
      <nuxt-link to="/"><ui-logo/></nuxt-link>
      <div class="deco-video">
          <video autoplay="autoplay" loop="loop" muted="muted">
            <source src="/videos/etiquette-noir.mp4" type="video/mp4">
          </video>
      </div>
      <ea-social/>
      <ui-menu class="ea-menu" />
      
    </header>
    <transition name="intro" mode="out-in" appear>
      <router-view :key="$route.fullPath"></router-view>
    </transition>
    
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
  import eaSocial from '~/components/social.vue'
  export default {
      components: {
          uiLoading,
          uiLogo,
          uiMenu,
          uiFooter,
          uiBackground,
          eaSocial
      },
      mounted () {
      }
  }
</script>
