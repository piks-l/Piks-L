<template>
  <div class="container">
    <h1>Isotope - filtering &amp; sorting</h1>

<h2>Filter</h2>
<div id="filters" class="button-group">  
  <button class="button is-checked" data-filter="*">show all</button>
  <button class="button" data-filter=".vendredi">Vendredi</button>
  <button class="button" data-filter=".samedi">Samedi</button>
</div>
<div id="filters2" class="button-group">  
  <button class="button is-checked" data-filter="*">show all</button>
  <button class="button" data-filter=".HARDCORE">Hardcore</button>
  <button class="button" data-filter=".TECHNO">Techno</button>
  <button class="button" data-filter=".TRANCE">Trance</button>
  <button class="button" data-filter=".HIPHOP">Hip Hop</button>
</div>

<div class="grid">
  <article v-for="artiste in artistes" :key="artiste.date" :data-category="artiste.dateshow+' '+artiste.stage" :class="artiste.dateshow+' '+artiste.stage" class="element-item">
      <nuxt-link class="title" :to="artiste._path">
        <div class="centrer" >
          <h3 class="name">{{artiste.title}}</h3>
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
    asyncData() {
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve({})
        }, 1000)
        console.log('document ready 2!')
      })
    },
     mounted() {
        setTimeout(() => {
          // Extend loader for an additional 5s
          this.$nuxt.$loading.finish()
        }, 5000)
        console.log('document ready 3!')
      }
  }
</script>
<style>
</style>
