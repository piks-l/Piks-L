<template>
    <div class="portfolio">
       <article v-for="tattoo in tattoos.slice().reverse()" :key="tattoo.date" class="works" :class="{ active: openWork }" @click="openWork = true">
          <nuxt-link class="title" :to="tattoo._path">
            <div class="center" >
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
  .portfolio {
      position: relative;
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
  .artists-img {
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
  .artists-img[lazy=loaded]{
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
