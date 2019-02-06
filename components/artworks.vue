<template>
    <div class="equipes">
      <div class="container">
          <div class="wrapper">
              <article v-for="artwork in artworks.slice().reverse().slice(0,4)" :key="artwork.date" class="work" :class="{ active: openWork }" @click="openWork = true">  
                  <nuxt-link class="title" :to="artwork._path">
                    <div class="thumb">
                        <img  v-lazy="artwork.thumbnail" :alt="artwork.title">
                    </div>
                  </nuxt-link>
              </article>
          </div>
      </div>
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
