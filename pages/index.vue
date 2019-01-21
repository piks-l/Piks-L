<template>
<div>
  <div class="container border">
    <h2>ARTWORKS</h2>
    <influx-artworks/>
  </div>
  <div class="container border black">
    <h2>TATTOOS</h2>
    <influx-tattoos/>
  </div>
  
  <div class="container border black">
    <h2>Sébastien Odd, tatoueur on the road vivant à Toulouse.</h2>
    <p>Pour chaque projet nous préférons bien évidemment en discuter avec vous directement. La plupart des tatouages réalisés sont des motifs originaux, et une rencontre est souvent nécessaire. Cependant pour un premier contact ou ceux qui viennent de loin il est possible de contacter par <a href="mailto:contact@lacourdesmiracles.tattoo">mail</a> ou via notre page facebook.</p>
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
</div>
</template>

<script>
  import $ from 'jquery'
  // import components
  import influxBlog from '~/components/blog.vue'
  import influxArtworks from '~/components/artworks.vue'
  import influxTattoos from '~/components/tattoos.vue'

  // export
  export default {
    layout: 'default',
    components: {
        influxBlog,
        influxArtistes,
        influxTattoos
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
      	VanillaTilt.init(document.querySelectorAll("h2"), {
          max: 25,
          speed: 400
        });
    }
  }
</script>
<style>
@media only screen and (min-width:960px) and (max-width:1264px){

}
@media only screen and (min-width:600px) and (max-width:959px){

}
@media only screen and (max-width:599px){

}
</style>
