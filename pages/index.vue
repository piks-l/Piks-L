<template>
  <main class="page-index">
    INDEX
  </main>
</template>
<script>
  import $ from 'jquery'
  export default {
    layout: 'default',
    transition: { name: 'intro', mode: 'out-in' },
    components: { },
    mounted() {
      $("body").removeClass('red-page yellow-page blue-page');
      this.titre();
  },
  destroyed() {
  },
  methods: {
      titre(){
          var modif = 'ACCUEIL';
          $('.page-title').html( modif );           
      }
  }
}
</script>

