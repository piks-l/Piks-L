<template>
    <div class="portfolio">
       <article v-for="tattoo in tattoos.slice().reverse()" :key="tattoo.date" class="works">
          <nuxt-link class="title" :to="tattoo._path">
            <div class="centrer" >
              <img class="fontblur" v-lazy="tattoo.thumbnail" :alt="tattoo.title">
              <img class="artists-img" v-lazy="tattoo.thumbnail" :alt="tattoo.title">
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
      const context = require.context('~/content/tattoos/page/', false, /\.json$/);
      const tattoos = context.keys().map(key => ({
        ...context(key),
        _path: `/tattoos/${key.replace('.json', '').replace('./', '')}`
      }));
      return { tattoos };
    }
  };
</script>
<style>
  
</style>
