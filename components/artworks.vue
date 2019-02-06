<template>
    <div class="portfolio">
       <article v-for="artwork in artworks.slice().reverse()" :key="artwork.date" class="works" :class="{ active: openWork }" @click="openWork = true">
          <nuxt-link class="title" :to="artwork._path">
            <div class="center" >
              <img class="fontblur" v-lazy="artwork.thumbnail" :alt="artwork.title">
              <img class="artist-img" v-lazy="artwork.thumbnail" :alt="artwork.title">
            </div>  
          </nuxt-link>
       </article>
    </div>
</template>

<script>
  import VueLazyload from 'vue-lazyload'
  export default {
    components: { VueLazyload },
    data() {
      const context = require.context('~/content/artworks/page/', false, /\.json$/);
      const artworks = context.keys().map(key => ({
        ...context(key),
        _path: `/artworks/${key.replace('.json', '').replace('./', '')}`
      }));
      return { 
        openWork: false,
        artworks 
      };
    }
  };
</script>
<style>
  .portfolio {
      position: relative;
      background: gray;
  }
  .works {
      width: 25%;
      display: inline-block;
      height: 25vw;
      overflow: hidden;
      margin-bottom: -5px;
      position: relative;
  }
  .center {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
  }
  .artist-img {
      position: relative;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      filter:blur(50px);
      -webkit-transition: 0.5s all ease;
      transition: 0.5s all ease;
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
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
</style>
