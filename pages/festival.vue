<template>
  <main class="black">
    <ea-titre/>
  </main>
</template>
<script>
  import $ from 'jquery'
  import eaTitre from '~/components/titre.vue'
  export default {
    layout: 'simple',
    transition: { name: 'outro', mode: 'out-in' },
    components: { eaTitre },
    data() {
      return {
        changed: false
      }
    }
  }
</script>
