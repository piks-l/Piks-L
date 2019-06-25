<template>
  <div id="main" :class="'ea-layout-'+this.$route.name">
    <header class="ea-ui">
      <nuxt-link to="/"><ui-logo/></nuxt-link>
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
  import uiLogo from '~/components/ui/logo.vue'
  import uiMenu from '~/components/ui/menu.vue'
  import uiFooter from '~/components/ui/footer.vue'
  export default {
      components: {
          uiLogo,
          uiMenu,
          uiFooter
      },
      mounted () {
      }
  }
</script>
