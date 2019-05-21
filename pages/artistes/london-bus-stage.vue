<template> 
  <div class="page artist">
    <div class="decoration decoration-CAMPING">
      <div class="volet-artist"></div>
    </div>
    <div id="main-container" class="artiste">
      <div class="container scene_element scene_element--fadein ">
        <nuxt-link to="/programmation/" class="fake-close">
            <div class="left"></div>
            <div class="right"></div>
        </nuxt-link>
        <div class="title">
            <div class="background"></div>
            <h2>LONDON BUS STAGE</h2>
        </div>
        <div class="content-artiste">
            <div class="vertical-align">
                <div class="artiste-stage">
                    <p>LONDON BUS STAGE</p>
                </div>
                <div class="artiste-date">
                    <p>VENDREDI &amp; SAMEDI</p>
                </div>
                <div class="content">
                  <p><strong>Quoi de mieux qu’une scène sur roue ? Une scène sur un bus ! </strong><br/>
                  Pendant les deux jours du festival vous pourrez vous balader au cœur 
                  du festival et danser sur le toit d’un bus londonien aux rythmes du collectif <strong>Encasa</strong>.</p>
                </div>
                <div class="social-artiste">
                  <a target="_blank" href="https://www.youtube.com/channel/UC10mvuac5L-ojcz7FH5Hyuw"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
        <div class="video">
            <p><iframe width="560" height="315" src="https://www.youtube.com/embed/TiT1ZGMtlss" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        </div>
      </div>
    </div>  
  </div>
</template>
<script>
import $ from 'jquery'
import VueMarkdown from 'vue-markdown'
import VueLazyload from 'vue-lazyload'
export default {
  layout: 'default',
  components: { VueMarkdown, VueLazyload },
  mounted() {
  }
};
</script>
<style>
.decoration-CAMPING {background-image: url('https://electrobotik.netlify.com/images/scene-LONDONBUS.jpg');}
</style>
