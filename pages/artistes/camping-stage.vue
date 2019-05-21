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
                    <p>VENDREDI ET SAMEDI</p>
                </div>
                <div class="content">
                  <p>lol</p>
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
.decoration-CAMPING {background-image: url('https://electrobotik.netlify.com/images/scene-TECHNO.jpg');}
</style>
