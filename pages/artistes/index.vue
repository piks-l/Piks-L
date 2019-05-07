<template>
<div class="page">
  <div class="container border">
    <h2>ARTISTES</h2>
  </div>
  <div class="portfolio">
     <article v-for="artiste in artistes.slice().reverse()" :key="artiste.date" class="works">
        <nuxt-link class="title" :to="artiste._path">
          <div class="centrer" >
            <img class="fontblur" v-lazy="artiste.thumbnail" :alt="artiste.title">
            <img class="artists-img" v-lazy="artiste.thumbnail" :alt="artiste.title">
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
      const context = require.context('~/content/artistes/page/', false, /\.json$/);
      const artistes = context.keys().map(key => ({
        ...context(key),
        _path: `/artistes/${key.replace('.json', '').replace('./', '')}`
      }));
      return { artistes };
    },
    mounted: () => {
      	
    }
  }
</script>
