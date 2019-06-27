<template>
  <div id="main" :class="'1plus2-layout-'+this.$route.name">
    <header class="1plus2-ui">
      <nuxt-link to="/"><ui-logo/></nuxt-link>
      <h2 class="1plus2-titre">{{this.$route.name}}</h2>
      <ui-menu class="1plus2-menu" />
    </header>
    <transition name="intro" mode="out-in" appear>
      <router-view :key="$route.fullPath"></router-view>
    </transition>
  </div>
</template>
<script>
  import $ from 'jquery'
  import uiLogo from '~/components/ui/logo.vue'
  import uiMenu from '~/components/ui/menu.vue'
  export default {
    components: {
        uiLogo,
        uiMenu
    },
    mounted () {
    }
  }
</script>
