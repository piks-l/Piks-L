<template>
  <div id="main" class="ea-layout">
    <header class="ea-ui">
      <ui-loading/>
      <ui-background/>
      <nuxt-link to="/"><ui-logo/></nuxt-link>      
      <ui-menu class="ea-menu" />
      <div class="billetterie">
          <a href="#">acheter vos billets</a>
      </div>
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
