<template>
  <div class="container">
    <h1>Isotope - filtering &amp; sorting</h1>

<h2>Filter</h2>
<div id="filters" class="button-group">  
  <button class="button is-checked" data-filter="*">show all</button>
  <button class="button" data-filter=".metal">metal</button>
  <button class="button" data-filter=".transition">transition</button>
  <button class="button" data-filter=".alkali, .alkaline-earth">alkali and alkaline-earth</button>
  <button class="button" data-filter=":not(.transition)">not transition</button>
  <button class="button" data-filter=".metal:not(.transition)">metal but not transition</button>
  <button class="button" data-filter="numberGreaterThan50">number > 50</button>
  <button class="button" data-filter="ium">name ends with &ndash;ium</button>
</div>

<h2>Sort</h2>
<div id="sorts" class="button-group">  
  <button class="button is-checked" data-sort-by="original-order">original order</button>
  <button class="button" data-sort-by="name">name</button>
  <button class="button" data-sort-by="symbol">symbol</button>
  <button class="button" data-sort-by="number">number</button>
  <button class="button" data-sort-by="weight">weight</button>
  <button class="button" data-sort-by="category">category</button>
</div>

<div class="grid">
    <article v-for="artiste in artistes" :key="artiste.date"  data-category="transition" :class="'artiste.dateshow'+'artiste.stage'" class="element-item">
        <nuxt-link class="title" :to="artiste._path">
          <div class="centrer" >
            <h3 class="name">{{artiste.title}}</h3>
            <img class="fontblur" v-lazy="artiste.thumbnail" :alt="artiste.title">
            <img class="artists-img" v-lazy="artiste.thumbnail" :alt="artiste.title">
          </div>  
        </nuxt-link>
    </article>
  <div class="element-item transition metal " data-category="transition">
    <h3 class="name">Mercury</h3>
    <p class="symbol">Hg</p>
    <p class="number">80</p>
    <p class="weight">200.59</p>
  </div>
  <div class="element-item metalloid " data-category="metalloid">
    <h3 class="name">Tellurium</h3>
    <p class="symbol">Te</p>
    <p class="number">52</p>
    <p class="weight">127.6</p>
  </div>
  <div class="element-item post-transition metal " data-category="post-transition">
    <h3 class="name">Bismuth</h3>
    <p class="symbol">Bi</p>
    <p class="number">83</p>
    <p class="weight">208.980</p>
  </div>
  <div class="element-item post-transition metal " data-category="post-transition">
    <h3 class="name">Lead</h3>
    <p class="symbol">Pb</p>
    <p class="number">82</p>
    <p class="weight">207.2</p>
  </div>
  <div class="element-item transition metal " data-category="transition">
    <h3 class="name">Gold</h3>
    <p class="symbol">Au</p>
    <p class="number">79</p>
    <p class="weight">196.967</p>
  </div>
  <div class="element-item alkali metal " data-category="alkali">
    <h3 class="name">Potassium</h3>
    <p class="symbol">K</p>
    <p class="number">19</p>
    <p class="weight">39.0983</p>
  </div>
  <div class="element-item alkali metal " data-category="alkali">
    <h3 class="name">Sodium</h3>
    <p class="symbol">Na</p>
    <p class="number">11</p>
    <p class="weight">22.99</p>
  </div>
  <div class="element-item transition metal " data-category="transition">
    <h3 class="name">Cadmium</h3>
    <p class="symbol">Cd</p>
    <p class="number">48</p>
    <p class="weight">112.411</p>
  </div>
  <div class="element-item alkaline-earth metal " data-category="alkaline-earth">
    <h3 class="name">Calcium</h3>
    <p class="symbol">Ca</p>
    <p class="number">20</p>
    <p class="weight">40.078</p>
  </div>
  <div class="element-item transition metal " data-category="transition">
    <h3 class="name">Rhenium</h3>
    <p class="symbol">Re</p>
    <p class="number">75</p>
    <p class="weight">186.207</p>
  </div>
  <div class="element-item post-transition metal " data-category="post-transition">
    <h3 class="name">Thallium</h3>
    <p class="symbol">Tl</p>
    <p class="number">81</p>
    <p class="weight">204.383</p>
  </div>
  <div class="element-item metalloid " data-category="metalloid">
    <h3 class="name">Antimony</h3>
    <p class="symbol">Sb</p>
    <p class="number">51</p>
    <p class="weight">121.76</p>
  </div>
  <div class="element-item transition metal " data-category="transition">
    <h3 class="name">Cobalt</h3>
    <p class="symbol">Co</p>
    <p class="number">27</p>
    <p class="weight">58.933</p>
  </div>
  <div class="element-item lanthanoid metal inner-transition " data-category="lanthanoid">
    <h3 class="name">Ytterbium</h3>
    <p class="symbol">Yb</p>
    <p class="number">70</p>
    <p class="weight">173.054</p>
  </div>
  <div class="element-item noble-gas nonmetal " data-category="noble-gas">
    <h3 class="name">Argon</h3>
    <p class="symbol">Ar</p>
    <p class="number">18</p>
    <p class="weight">39.948</p>
  </div>
  <div class="element-item diatomic nonmetal " data-category="diatomic">
    <h3 class="name">Nitrogen</h3>
    <p class="symbol">N</p>
    <p class="number">7</p>
    <p class="weight">14.007</p>
  </div>
  <div class="element-item actinoid metal inner-transition " data-category="actinoid">
    <h3 class="name">Uranium</h3>
    <p class="symbol">U</p>
    <p class="number">92</p>
    <p class="weight">238.029</p>
  </div>
  <div class="element-item actinoid metal inner-transition " data-category="actinoid">
    <h3 class="name">Plutonium</h3>
    <p class="symbol">Pu</p>
    <p class="number">94</p>
    <p class="weight">(244)</p>
  </div>
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
