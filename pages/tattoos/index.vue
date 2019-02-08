<template>
<div>
  <div class="container border">
    <h2>TATTOOS</h2>
  </div>
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
      const context = require.context('~/content/tattoos/page/', false, /\.json$/);
      const tattoos = context.keys().map(key => ({
        ...context(key),
        _path: `/tattoos/${key.replace('.json', '').replace('./', '')}`
      }));
      return { tattoos };
    },
    mounted: () => {
      	
    }
  }
</script>
