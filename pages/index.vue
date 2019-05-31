<template>
  <main>
    <ea-background/>
    <h1>ACCUEIL</h1>
    <nuxt-link to="/programmations/">TEST</nuxt-link>
  </main>
</template>

<script>
  import $ from 'jquery'
  import eaBackground from '~/components/ui/background.vue'
  // export
  export default {
    layout: 'default',
    components: { eaBackground },
    data() {
      return {
        changed: false
      }
    }
  }
</script>
<style>
</style>
