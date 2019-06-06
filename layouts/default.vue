<template>
  <div id="main" class="ea-layout">
    <header class="ea-ui">
      <ui-loading/>
      <ui-background/>
      <ui-logo/>
      <ui-menu class="ea-menu" />
    </header>
    <transition name="fade">
      <ea-titre/>
    </transition> 
    <nuxt/>
  </div>
</template>
<script>

  import $ from 'jquery'
  import uiLoading from '~/components/ui/loading.vue'
  import uiLogo from '~/components/ui/logo.vue'
  import uiMenu from '~/components/ui/menu.vue'
  import uiBackground from '~/components/ui/background.vue'
  import eaTitre from '~/components/titre.vue'
  
  export default {
      components: {
          uiLoading,
          uiLogo,
          uiMenu,
          uiBackground,
          eaTitre
      },
      mounted () {
      },
      methods () {
        beforeEnter: function () {
           console.log("Before enter transition");
        }
      }
  }
</script>
<style>
.fade-enter-active, 
.fade-leave-active {
  transition: all .5s;
  opacity:1;
  top:10px;
}
.fade-enter, 
.fade-leave-to {
  top:0px;
  opacity: 0;
}
</style>
