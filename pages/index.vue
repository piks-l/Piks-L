<template>
  <section>
    <div class="split gauche">
      <div class="centre">
        <h3>ARTWORKS</h3>
      </div>
    </div>
    <div class="split droit">
      <div class="centre">
        <h3>TATTOOS</h3>
      </div>
    </div>
    <div class="container border black">
      <h2>Sébastien Odd, tatoueur on the road vivant à Toulouse.</h2>
      <p>Il travaille plusieurs styles notamment le style réaliste pour lequel il est souvent demandé. Il adore aussi l’univers des comics, du jeu vidéo et du dessin en général et tatoue également beaucoup de pièces ,en newschool et en néo-trad, aux illustrations de qualité et au dessin maîtrisé.</p>
    </div>
    <div class="container border black">
      <p><b>Pour aborder vos projets et prendre rendez-vous, veuillez m'envoyer un mail en précisant l'emplacement, les dimensions et l'inspirations en y joignant éventuellement 2 ou 3 photos</b></p>
    </div>
    <div class="container border">
      <h2>Actualités</h2>
    </div>  
    <div class="content-blog">
      <influx-blog/>
        <div class="full-width">
          <div class="container border black">
              <nuxt-link to="/blog/"><p>Voir les autres actualités !</p></nuxt-link>
          </div>
        </div>
    </div> 
  </section>
</template>

<script>
  import $ from 'jquery'
  // import components
  import influxBlog from '~/components/blog.vue'
  import influxShop from '~/components/mini-shop.vue'

  // export
  export default {
    layout: 'default',
    components: {
        influxBlog,
        influxShop
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
.split {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
}
.gauche {
  left: 0;
  background-color: #252525;
}
.droit {
  right: 0;
  background-color: #000000;
}
.centre {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
@media only screen and (min-width:960px) and (max-width:1264px){

}
@media only screen and (min-width:600px) and (max-width:959px){

}
@media only screen and (max-width:599px){

}
</style>
