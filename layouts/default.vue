<template>
<transition name="intro" mode="out-in">
  <div id="main" class="layout-ea">
    <ea-background/>
    <ea-logo/>
    <ea-menu/>
    <nuxt/>
  </div>
  </transition>
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
