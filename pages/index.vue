<template>
  <main class="black">
    <ea-titre/>
  </main>
</template>
<script>
  import $ from 'jquery'
  import eaTitre from '~/components/titre.vue'
  export default {
    layout: 'default',
    transition: { name: 'outro', mode: 'out-in' },
    components: { eaTitre },
    data() {
      return {
        changed: false
      }
    }
  }
</script>
<style>
.mirror.anim-filter .mirror__source image {
  -webkit-filter: url("#glitch");
  filter: url("#glitch");
}
</style>
