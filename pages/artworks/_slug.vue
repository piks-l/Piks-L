<template>
  <div class="artist">
    <div :class="'intro artist-'+title">
      <div class="header">
          <h2>{{ title }}</h2>    
          <vue-markdown>{{description}}</vue-markdown>
      </div>
    </div>
    <div class="portfolio">
      <div class="work" v-for="(img, i) in galerie.slice().reverse()" :key="galerie.i">
          <div class="center" >
            <img class="fontblur" v-lazy="img">
            <img class="artist-img" v-lazy="img">
          </div>  
      </div>
    </div>
    <div class="full-width">
        <div class="container">
            <nuxt-link to="/artworks/"><p>Voir les autres artworks</p></nuxt-link>
        </div>
    </div>   
  </div>
</template>

<script>
import $ from 'jquery'
import VueMarkdown from 'vue-markdown'
import VueLazyload from 'vue-lazyload'

export default {
  layout: 'artistes',
  components: { VueMarkdown, VueLazyload },
  async asyncData({ params }) {
    let page = await import('~/content/artworks/page/' + params.slug + '.json');
    return page;
  },
  head() {
    return {
      title: `${this.title}`,
      meta: [
        { hid: 'description', name: 'description', content: `${this.description}` },
        { 'property': 'og:title', 'content': `${this.title}`, 'vmid': 'og:title' },
        { 'property': 'og:description', 'content': `${this.description}` },
        { 'property': 'og:image', 'content': `${this.couverture}`, 'vmid': 'og:image' }
      ]
    }
  },
  mounted() {
      
  }
};
</script>
<style>
  .intro {
      position: relative;
      width: 100%;
      height:auto;
      margin-top: 58px;
      z-index:1;
  }
  .artist {
      padding: 0 !important;
  }
  .artist .header {
      width: 100%;
      height: auto;
      position: relative;
      top: 85px;
      -webkit-transform: translatey(-50%);
      transform: translatey(-50%);
      padding: 30px 0;
      text-align: center;
  }
  .portfolio {
      position: relative;
  }
  .work {
      width: 100%;
      display: inline-block;
      height: auto;
      position: relative;
  }
  .center {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
  }
  .work .center{
      padding:50px 0;
      overflow: visible !important;
  }
  .artist-img {
      position: relative;
      left: 50%;
      -webkit-transform: translatex(-50%);
      transform: translatex(-50%);
      filter:blur(50px);
      -webkit-transition: 0.5s all ease;
      transition: 0.5s all ease;
  }
  .artist-img[lazy=loaded]{
      filter:blur(0px) !important;
  }
  .fontblur{
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      filter:blur(50px);
      position: absolute;
      height:110%;
      width: auto;
  }
  .artist .full-width{
      width:100%;
      background:transparent;
      display: inline-block;
      z-index:1;
      position:relative;
  }
  .artist .full-width p {
      text-align: center;
      display: inline-block;
      padding: 15px 25px;
      background: #fff;
      position: relative;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
  }

  @media only screen and (min-width:960px) and (max-width:1264px){

  }
  @media only screen and (min-width:600px) and (max-width:959px){
    .work {
        width: 50%;
        height: 50vw;
    }
    .artist .full-width {
        margin: -30px 0 0;
    }
    .artist .container {
        margin: 0;
    }
    .artist .header {
        width: 100%;
        left: 0;
        top: 30px !important;
        -webkit-transform: none;
        transform: none;
    }
  }
  @media only screen and (max-width:599px){
    .work {
        width: 100%;
        height: 100vw;
    }
    .artist .full-width {
        margin-bottom: 0;
        margin-top: -30px;
    }
    .artist .container {
        margin: 0;
    }
    .artist .header {
        width: 100%;
        left: 0;
        top: 30px !important;
        -webkit-transform: none;
        transform: none;
    }
    .artist-cover {
        height: 100vh;
        top: 0;
    }
    .intro {
        margin-top: 0;
        margin-bottom: 30px;
    }
    
  }
</style>
