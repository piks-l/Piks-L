<template>
  <main>
    <ea-titre/>
    <nuxt-link to="/programmation/">PROGRAMMATION</nuxt-link>
  </main>
</template>
<script>
  import $ from 'jquery'
  import eaTitre from '~/components/titre.vue'
  export default {
    layout: 'default',
    transition: 'page',
    components: { eaTitre },
    data() {
      return {
        changed: false
      }
    }
  }
</script>
<style>
    .page-enter-active, .page-leave-active {
      transition: all .30s ease-out;
    }
    .page-enter, .page-leave-active {
      opacity: 0;
      transform-origin: 50% 50%;
    }
    .page-enter-active h2, .page-leave-active h2{
      transition: all .50s ease-out;
    }
    .page-enter h2, .page-leave-active h2{
        opacity: 0;
        margin-bottom: 50px;
      }    
</style>
