<template>
  <div class="page">
    <section class="blend-mode" id="biographie">
      <div class="container">
      <div id="main">
      <div>
        <isotope :list="list" id="root_isotope" class="isoDefault" :options='option' >
          <div v-for="element in list" @click="selected=element"  :key="element.id">
            {{element.name}}
            <br> {{element.id}}
          </div>
        </isotope>
      </div>

      <div id="change">
        <button @click="add">Add</button>
        <button @click="replace">Replace</button>
      </div>

      <div>
        <div v-if="selected" class="item">
          <input type="text" name="" v-model="selected.name">
          <br>
          <input type="text" name="" v-model="selected.id">
        </div>
      </div>
      </div>
      </div>
    </section>
    <section class="blend-mode-2">
      <div class="container">
        <p data-900="transform:translatex(200px);opacity:0;" data-1200="transform:translatex(0px);opacity:.9;">
          Il travaille plusieurs styles notamment le style <strong>réaliste</strong> pour lequel il est souvent demandé.<br>
          Il adore aussi l’univers des <strong>comics</strong>, du <strong>jeu vidéo</strong> et du <strong>dessin</strong> en général et <em>tatoue</em> également beaucoup de pièces ,en <em>newschool</em> et en <em>néo-trad</em>, aux <strong>illustrations de qualité</strong> et au <strong>dessin maîtrisé</strong>.
          </p>
        <p  data-960="transform:translatex(-200px);opacity:0;" data-1260="transform:translatex(0px);opacity:.9;"><b>Pour aborder vos projets et prendre rendez-vous, veuillez m'envoyer un mail en précisant l'emplacement, les dimensions et l'inspirations en y joignant éventuellement 2 ou 3 photos</b></p>
      </div>
    </section>
        
    <section class="no-padding">
      <influx-carouselartistes class="caroublog"/>
    </section>
    
    <section>
      <div class="container">
        <h2>Actualités</h2>
      </div>
      <div class="container">
          <nuxt-link to="/blog/"><p>Voir les autres actualités !</p></nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
  import $ from 'jquery'
  //import Isotope from 'isotope-layout'
  if (process.BROWSER_BUILD) {
     const isotope = require('isotope-layout')
     Vue.use(isotope)
  }
  // import plugins
  import influxCarouselartistes from '~/components/plugins/carousel-artistes.vue'
  // export
  export default {
    layout: 'default',
    data() { // Define data
      return {
        list: [
          {name: "John", id: 25 }, 
          {name: "Joao", id: 7}, 
          {name: "Albert", id: 12},
          {name: "Jean", id: 100}
        ],
        selected: null,
        option: {
          getSortData: {
            id: "id"
          },
          sortBy : "id"
        }
      }
    },
    components: {
        influxCarouselartistes
    },
    head() {
      return {
        title: 'Electrobotik Invasion - le 2 & 3 Août 2019',
        meta: [
          { hid: 'description', name: 'description', content: 'Electrobotik Invasion Festival, le 2 & 3 Août 2019, Circuit Paul Ricard - Le Castelet (83).' },
          { 'property': 'og:title', 'content': 'Electrobotik Invasion - le 2 & 3 Août 2019', 'vmid': 'og:title' },
          { 'property': 'og:description', 'content': 'Electrobotik Invasion Festival, le 2 & 3 Août 2019, Circuit Paul Ricard - Le Castelet (83).' },
          { 'property': 'og:image', 'content': 'images/uploads/link_share.jpg', 'vmid': 'og:image' }
        ]
      }
    },
    mounted () {
      
    }
  }
</script>
<style>
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
