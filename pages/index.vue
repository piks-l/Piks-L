<template>
  <main class="page-index">
    <slider/>
  </main>
</template>
<script>
  // Library
  import $ from 'jquery'
  // Ui
  // Widget
  import slider from '~/components/widget/slider.vue'

  export default {
    layout: 'default',
    transition: {
      name: 'intro', mode: 'out-in'
    },
    components: {
      slider
    },
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
