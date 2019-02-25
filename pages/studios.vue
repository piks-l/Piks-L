<template>
  <div class="page">
    <div class="container">
      <h2>Nos studios</h2>
      <p>Pour chaque projet nous préférons bien évidemment en discuter avec vous directement. La plupart des tatouages réalisés sont des motifs originaux, et une rencontre est souvent nécessaire. Cependant pour un premier contact ou ceux qui viennent de loin il est possible de contacter par <a href="mailto:contact@lacourdesmiracles.tattoo">mail</a> ou via notre page facebook.</p>
    </div>
    <cdm-shop/>
      <div class="container">
      <p><b>Tous nos locaux respectent des règles d’hygiène strictes tant au niveau de la stérilisation qu’au niveau des matériaux utilisés !</b></p>
    </div>  
  </div>
</template>

<script>
  import $ from 'jquery'
  // export
  export default {
    layout: 'default',
    head() {
      return {
        title: 'LES STUDIOS',
        meta: [
          { hid: 'description', name: 'description', content: 'Piero a créé la Cour des Miracles à Toulouse il y a presque 10 ans dans le but de réunir une équipe de tatoueurs spécialisés dans chacun des grands courants de l’art du tatouage' },
          { 'property': 'og:title', 'content': 'LES STUDIOS', 'vmid': 'og:title' },
          { 'property': 'og:description', 'content': 'Piero a créé la Cour des Miracles à Toulouse il y a presque 10 ans dans le but de réunir une équipe de tatoueurs spécialisés dans chacun des grands courants de l’art du tatouage' },
          { 'property': 'og:image', 'content': 'images/uploads/link_share.jpg', 'vmid': 'og:image' }
        ]
      }
    },
    mounted () {

    }
  }
</script>
<style>

</style>
