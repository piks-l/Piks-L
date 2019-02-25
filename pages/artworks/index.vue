<template>
<div class="page">
  <div class="container">
    <h2>ARTWORKS</h2>
  </div>
  <div class="portfolio">
     <article v-for="artwork in artworks.slice().reverse()" :key="artwork.date" class="works" >
        <nuxt-link class="title" :to="artwork._path">
          <div class="centrer" >
            <img class="fontblur" v-lazy="artwork.thumbnail" :alt="artwork.title">
            <img class="artists-img" v-lazy="artwork.thumbnail" :alt="artwork.title">
          </div>  
        </nuxt-link>
     </article>
  </div>
</div>
</template>

<script>
  import $ from 'jquery'
  import VueLazyload from 'vue-lazyload'

  // export
    export default {
    layout: 'default',
    components: { VueLazyload },
    data() {
      const context = require.context('~/content/artworks/page/', false, /\.json$/);
      const artworks = context.keys().map(key => ({
        ...context(key),
        _path: `/artworks/${key.replace('.json', '').replace('./', '')}`
      }));
      return { 
        artworks 
      };
    },
    mounted: () => {
      	
    }
  };
</script>
