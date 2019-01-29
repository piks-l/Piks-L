<template>
  <div>
    <section>
      <div class="container border black">
        <h2>Sébastien Odd, tatoueur on the road vivant à Toulouse.</h2>
        <p>Il travaille plusieurs styles notamment le style réaliste pour lequel il est souvent demandé. Il adore aussi l’univers des comics, du jeu vidéo et du dessin en général et tatoue également beaucoup de pièces ,en newschool et en néo-trad, aux illustrations de qualité et au dessin maîtrisé.</p>
      </div>
    </section>
    <section>
      <div class="container border black">
        <p><b>Pour aborder vos projets et prendre rendez-vous, veuillez m'envoyer un mail en précisant l'emplacement, les dimensions et l'inspirations en y joignant éventuellement 2 ou 3 photos</b></p>
      </div>
    </section>
    <section>
      <div class="container border">
        <h2>Actualités</h2>
      </div>  
    </section>
    <section>
      <div class="content-blog">
        <div class="full-width">
          <h2>Actualités</h2>
        </div>
        <influx-blog/>
        <div class="full-width">
          <div class="container border black">
              <nuxt-link to="/blog/"><p>Voir les autres actualités !</p></nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import $ from 'jquery'
  // import components
  import influxBlog from '~/components/blog.vue'

  // export
  export default {
    layout: 'default',
    components: {
        influxBlog
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
/* DOUBLE BUTTON*/
.choix-creation {
  height: 100px;
  display: block;
  position: relative;
}
.split {
  height: 100%;
  width: 50%;
  position: absolute;
  z-index: 1;
  overflow-x: hidden;
}
.gauche {
  left: 0;
  background-color: #252525;
}
.droite {
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
