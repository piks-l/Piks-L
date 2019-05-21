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
                    <p>VENDREDI &amp; SAMEDI</p>
                </div>
                <div class="content">
                  <p><strong>TALOWA DUB CLUB</strong> présente un week-end Dub a Dub Style au camping de l'ELECTROBOTIK !
                  Toute la journée viens t'enivrer aux rythmes de basses lourdes, sur des sonorités dub reggae steppas 
                  aux côtés de légendes du milieu : le talentueux mc <strong>RAS TWEED</strong> dont la réputation n'est 
                  plus à faire et le warrior <strong>BUNNY DREAD</strong> à la sélection musicale pointue.</p>
                 <p> Le tout sera sonorisé par le puissant <strong>WELDERS HI FI SOUND SYSTEM.</strong></p>
                </div>
            </div>
        </div>
        <div class="video">
            <p>test</p>
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
