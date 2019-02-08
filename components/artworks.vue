<template>
    <div class="portfolio">
       <article v-for="artwork in artworks.slice().reverse()" :key="artwork.date" class="works" :class="{ active: openWork }" @click="openWork = true">
          <nuxt-link class="title" :to="artwork._path">
            <div class="centrer" >
              <img class="fontblur" v-lazy="artwork.thumbnail" :alt="artwork.title">
              <img class="artists-img" v-lazy="artwork.thumbnail" :alt="artwork.title">
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
 
</style>
