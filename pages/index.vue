<template>
  <div>
    <section id="biographie">
      <div class="container">
        <div class="bloc">
          <img class="font-logo" src="images/uploads/logobombyx.png">
        </div>
        <div class="bloc" data-0="transform:translateX(200px);" data-500="transform:translateX(0px);">
          <h2 data-250="transform:translateX(100px);opacity:0;" data-500="transform:translateX(0px);opacity:1;">SEBASTIEN ODD</h2>
          <h3 data-280="transform:translateX(100px);opacity:0;" data-500="transform:translateX(0px);opacity:1;">TATOUEUR ON THE ROAD</h3>
          <h3 data-310="transform:translateX(100px);opacity:0;" data-500="transform:translateX(0px);opacity:1;">SUR TOULOUSE</h3>
          <p>Il travaille plusieurs styles notamment le style <strong>réaliste</strong> pour lequel il est souvent demandé.<br>
          Il adore aussi l’univers des <strong>comics</strong>, du <strong>jeu vidéo</strong> et du <strong>dessin</strong> en général et <em>tatoue</em> également beaucoup de pièces ,en <em>newschool</em> et en <em>néo-trad</em>, aux <strong>illustrations de qualité</strong> et au <strong>dessin maîtrisé</strong>.</p>
        </div>        
      </div>
    </section>
    <section>
      <div class="container">
        <p><b>Pour aborder vos projets et prendre rendez-vous, veuillez m'envoyer un mail en précisant l'emplacement, les dimensions et l'inspirations en y joignant éventuellement 2 ou 3 photos</b></p>
      </div>
    </section>
    <section>
      <div class="container">
        <h2>Actualités</h2>
      </div>
      <influx-carouselartworks class="caroublog"/>
      <influx-carouseltattoos class="caroublog"/>
      <div class="container">
          <nuxt-link to="/blog/"><p>Voir les autres actualités !</p></nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
  import $ from 'jquery'
  // import plugins
  import influxCarouselartworks from '~/components/plugins/carousel-artworks.vue'
  import influxCarouseltattoos from '~/components/plugins/carousel-tattoos.vue'
  // export
  export default {
    layout: 'default',
    components: {
        influxCarouselblog,
        influxCarouseltattoo
    },
    head() {
      return {
        title: 'SEBASTIEN-ODD',
        meta: [
          { hid: 'description', name: 'description', content: 'Sébastien Odd est tatoueur chez Artcore Tattoos à Toulouse. Il travaille le tatouage réaliste, le newschool, le néo-trad et l’illustration.' },
          { 'property': 'og:title', 'content': 'SEBASTIEN-ODD', 'vmid': 'og:title' },
          { 'property': 'og:description', 'content': 'Sébastien Odd est tatoueur chez Artcore Tattoos à Toulouse. Il travaille le tatouage réaliste, le newschool, le néo-trad et l’illustration.' },
          { 'property': 'og:image', 'content': 'images/uploads/link_share.jpg', 'vmid': 'og:image' }
        ]
      }
    },
    mounted () {
      	
    }
  }
</script>
<style>
  #biographie {
    height: 90vh;
    display: table;
    width: 100%;
  }
  #biographie .container{
    display: table-cell;
    vertical-align: middle;
  }

  .bloc {
      position: relative;
      width: 50%;
      display: inline-block;
      padding: 15px;
      vertical-align: middle;
  }
  .bloc .font-logo {
      max-width: 100%;
      max-height: 100%;
      position: relative;
  }

  @media only screen and (min-width:960px) and (max-width:1264px){

  }
  @media only screen and (min-width:600px) and (max-width:959px){

  }
  @media only screen and (max-width:599px){

  }
</style>
