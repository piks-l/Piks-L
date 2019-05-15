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
    mounted() {
      	console.log('document ready 2!')
    }
  }
</script>
<style>

.projects .thumbnail { width: 243px; height: 149px; }
.projects .thumbnail .thumbnail-overlay { opacity: 0; background-color: rgba(black, 0.8);  transition: opacity 0.25s ease-in-out;}
.projects .thumbnail:hover .thumbnail-overlay { opacity: 1; }
  #biographie {
    height: 90vh;
    display: table;
    width: 100%;
  }
  #biographie .container{
    display: table-cell;
    vertical-align: middle;
  }

  .bloc {
      position: relative;
      width: 50%;
      display: inline-block;
      padding: 15px;
      vertical-align: middle;
  }
  .bloc .font-logo {
      max-width: 100%;
      max-height: 100%;
      position: relative;
  }
#container {
  border: 1px solid;
  padding: 3px;
}
.container {
  position: relative;
  background:white;
}
.item {
  width: 70px;
  height: 70px;
  margin: 3px;
  float: left;
}

.item.large {
  width: 146px;
  height: 146px;
}

.red { background: red; }
.blue { background: blue; }
.green { background: green; }
.yellow { background: yellow; }

/* Start: Recommended Isotope styles */

/**** Isotope Filtering ****/

.isotope-item {
  z-index: 2;
}

.isotope-hidden.isotope-item {
  pointer-events: none;
  z-index: 1;
}

/**** Isotope CSS3 transitions ****/

.isotope,
.isotope .isotope-item {
  -webkit-transition-duration: 0.8s;
     -moz-transition-duration: 0.8s;
          transition-duration: 0.8s;
}

.isotope {
  -webkit-transition-property: height, width;
     -moz-transition-property: height, width;
          transition-property: height, width;
}

.isotope .isotope-item {
  -webkit-transition-property: -webkit-transform, opacity;
     -moz-transition-property:    -moz-transform, opacity;
          transition-property:         transform, opacity;
}

/**** disabling Isotope CSS3 transitions ****/

.isotope.no-transition,
.isotope.no-transition .isotope-item,
.isotope .isotope-item.no-transition {
  -webkit-transition-duration: 0s;
     -moz-transition-duration: 0s;
          transition-duration: 0s;
}

/* End: Recommended Isotope styles */

  @media only screen and (min-width:960px) and (max-width:1264px){

  }
  @media only screen and (min-width:600px) and (max-width:959px){

  }
  @media only screen and (max-width:599px){

  }
</style>
