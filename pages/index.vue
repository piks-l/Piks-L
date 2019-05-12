<template>
  <div class="page">
    <div class="filters">
        <a @click="filterItems('selectorA')">filter A</a>
        <a @click="filterItems('selectorB')">filter B</a>
        <a @click="filterItems('selectorC')">filter C</a>
    </div>
    <div class="items">
      <no-ssr>
        <nuxt-link
          v-for="(item, index) in items"
          :key="index"
          :to="item.url"
          class="item"
        >
        </nuxt-link>
      </no-ssr>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import Isotope
  //import isotope from 'vueisotope'
  if (process.BROWSER_BUILD) {
     const isotope = require('isotope-layout');
     Vue.use(isotope-layout)
  }
  // import plugins
  import influxCarouselartistes from '~/components/plugins/carousel-artistes.vue'
  // export
  export default {
    layout: 'default',
    data() {
      return {
        items: [],
        iso: null,
      };
    },
    created() {
      const that = this;
      this.$axios
        .get('/items')
        .then(response => {
          const items = response.data;
          items.forEach(item => {
            that.items.push(item);
          });
        })
        .then(() => {
          that.isotope();
        })
        .catch(error => {
          console.warn('❌:', error.message);
        });
    },
    methods: {
      isotope() {
        this.iso = new Isotope('.items', {
          itemSelector: '.item',
          layout: 'fitRows',
        });
        this.iso.layout();
      },
      filterItems(selector) {
        this.iso.arrange({ filter: `${selector}` });
      },
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
      var count = 0;
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
