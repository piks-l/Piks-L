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
            <h2>SECRET STAGE</h2>
        </div>
        <div class="content-artiste">
            <div class="vertical-align">
                <div class="artiste-stage">
                    <p>SECRET STAGE</p>
                </div>
                <div class="artiste-date">
                    <p>VENDREDI ET SAMEDI</p>
                </div>
                <div class="content">
                  <p><strong>Cette année, un scène sera caché à l’intérieur du festival ! </strong><br/><br/>
                  Aucun indice ne sera dévoilé, seul les festivaliers les plus curieux pourront trouver la scène secrète 
                  et auront la chance de profiter des sets du crew <strong>1RDT</strong> avec <strong>Charlotte (RA+RE )</strong>, <strong>D-Mood Records</strong>, <strong>Def. Raw Music Concept</strong>, <strong>GetDub</strong>, <strong>IN' OUBLIABLES</strong>, <strong>Key Horses</strong>, <strong>LES MULES</strong>, <strong>MendelBoy (Live)</strong>, <strong>Missing No</strong>, <strong>Thibaut Garenq</strong>.
<br/><br/>
<strong>Sortez vos boussoles, prenez la carte du festival et lancez-vous à sa recherche !!</strong></p>
                </div>
                <div class="social-artiste">
                  <a target="_blank" href="https://soundcloud.com/1rdtofficial"><i class="fab fa-soundcloud"></i></a>
                </div>
            </div>
        </div>
        <div class="video">
            <p><iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/117022940&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe></p>
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
.decoration-CAMPING {background-image: url('https://electrobotik.netlify.com/images/scene-SECRET.jpg');}
</style>
