<template>
<div>
  <div class="container border">
    <h2>L'équipe</h2>
    <p>Les artistes de <b>la Cour des Miracles</b> sont tous des <i>artistes</i> reconnus et confirmés. Ils ont chacun leur propre <i>style</i>, il est important de vous familiariser avec leurs différents <i>univers</i>. Nous vous proposons donc d’aller voir les <i>galeries</i> et <i>pages perso</i> de chacun et de suivre les liens proposés.</p>
  </div>
  <cdm-artistes/> 
</div>
</template>

<script>
  import $ from 'jquery'
  // import components
  import cdmArtistes from '~/components/artistes.vue'
  // export
  export default {
    layout: 'default',
    components: {
        cdmArtistes
    },
    mounted: () => {
      	
    }
  }
</script>
