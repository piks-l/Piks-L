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
            <h2>CAMPING STAGE</h2>
        </div>
        <div class="content-artiste">
            <div class="vertical-align">
                <div class="artiste-stage">
                    <p>CAMPING STAGE</p>
                </div>
                <div class="artiste-date">
                    <p>SAMEDI &amp; DIMANCHE</p>
                </div>
                <div class="content">
                  <p><strong>TALOWA DUB CLUB</strong> présente un week-end Dub a Dub Style au camping de l'ELECTROBOTIK !
                  Toute la journée viens t'enivrer aux rythmes de basses lourdes, sur des sonorités dub reggae steppas 
                  aux côtés de légendes du milieu : le talentueux mc <strong>RAS TWEED</strong> dont la réputation n'est 
                  plus à faire et le warrior <strong>BUNNY DREAD</strong> à la sélection musicale pointue.</p>
                 <p> Le tout sera sonorisé par le puissant <strong>WELDERS HI FI SOUND SYSTEM.</strong><br/></p>
                  <p>
                 SAMEDI : Ras Tweed <br/>
                 DIMANCHE : Selecta by Bunny Dread<br/> </p>
                </div>
                <div class="social-artiste">
                  <a target="_blank" href="https://www.talowa.fr/tdc-en/"><i class="fas fa-link"></i></a>
                </div>
            </div>
        </div>
        <div class="video">
            <p><iframe width="560" height="315" src="https://www.youtube.com/embed/bDEeFpStSZU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
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
.decoration-CAMPING {background-image: url('https://electrobotik.netlify.com/images/scene-CAMPING.jpg');}
</style>
