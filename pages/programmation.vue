<template>
  <div id="main-container">
      <div  class="container scene_element scene_element--fadein ">
        <img id="logo" src="https://electrobotik.netlify.com/images/logo-basic.svg" alt="logo">
        <header id="header">
          <div class="sticky-container">
              <img id="sticky-logo" class="logo" src="https://electrobotik.netlify.com/images/logo-horizontal.svg"  alt="logo">
              <div id="filters">
                <h1>PROGRAMMATION</h1>
                <div class="button-date button-group"  data-filter-group="date">
                    <div class="center">
                        <button class="button is-checked" @click="filter('*')" data-filter="*">FULL LINE-UP</button>
                        <span>/</span>
                        <button class="button" @click="filter('.vendredi')" data-filter=".vendredi">VEN. 02 AOÛT</button>
                        <span>/</span>
                        <button class="button" @click="filter('.samedi')" data-filter=".samedi">SAM. 03 AOÛT</button>
                    </div>
                </div>
                <div class="stage">
                  <div class="center">
                    <div class="button-stage button-group"  data-filter-group="stage">
                        <button class="button active" @click="filter('.HARDCORE')" data-filter=".HARDCORE"><span>T-800 -</span> HARDCORE STAGE</button>
                        <button class="button active" @click="filter('.TECHNO')" data-filter=".TECHNO"><span>R2-D2 -</span> TECHNO STAGE</button>
                        <button class="button active" @click="filter('.TRANCE')" data-filter=".TRANCE"><span>WALL-E -</span> TRANCE STAGE</button>
                        <button class="button active" @click="filter('.HIPHOP')" data-filter=".HIPHOP"><span>C-3PO -</span> HIP-HOP STAGE</button>
                        <button class="button any" data-filter=""></button>
                    </div>
                    <div class="other-stage">
                        <button class="buton active">SECRET STAGE</button>
                        <button class="buton active">LONDON BUS STAGE</button>
                        <button class="buton active">CAMPING STAGE</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="separator"></div>
          </div>
      </header>
      <div class="deco-top"><div id="parallax1" class="parallax" data-image-src="https://electrobotik.netlify.com/images/crop.jpg"></div></div>
          <div class="grid">
              <div v-for="artiste in artistes" :key="artiste.date"  :class="artiste.dateshow+' '+artiste.stage" class="element-item">
                   <nuxt-link :to="artiste._path+'/'">
                      <div class="effect">
                          <div class="volet1">
                              <img class="lazy" v-lazy="artiste.thumbnail" :alt="artiste.title">
                              <div class="boxshadow"></div>
                              <div class="circle"><img src="https://electrobotik.netlify.com/images/circle.svg"/></div>
                              <h3 class="name small">{{artiste.title}}</h3>
                              <p>class="name small">{{artiste.dateshow}}</p>
                          </div>
                          <div class="volet2"></div>
                          <div class="border-bot"></div>
                      </div>
                  </nuxt-link>
              </div>
          </div>
      </div>
      <electrobotik-footer/>
  </div>
</template>
<script>
  // import
  let Isotope;
  if (process.browser) { Isotope = require("isotope-layout"); }
  import $ from 'jquery'
  import VueLazyload from 'vue-lazyload'
  import electrobotikFooter from '~/components/ui/footer.vue'
  // export
export default {
    layout: 'default',
    components: { VueLazyload, electrobotikFooter },
    head() {
      return {
        title: 'Programmation | Electrobotik Invasion - le 2 & 3 Août 2019',
        meta: [
          { hid: 'description', name: 'description', content: 'Electrobotik Invasion Festival, le 2 & 3 Août 2019, Circuit Paul Ricard - Le Castelet (83).' },
          { 'property': 'og:title', 'content': 'Electrobotik Invasion - le 2 & 3 Août 2019', 'vmid': 'og:title' },
          { 'property': 'og:description', 'content': 'Electrobotik Invasion Festival, le 2 & 3 Août 2019, Circuit Paul Ricard - Le Castelet (83).' },
          { 'property': 'og:image', 'content': 'images/uploads/link_share.jpg', 'vmid': 'og:image' }
        ]
      }
    },
    data() {
      const context = require.context('~/content/artistes/page/', false, /\.json$/);
      const artistes = context.keys().map(key => ({
        ...context(key),
        _path: `/artistes/${key.replace('.json', '').replace('./', '')}`
      }));
      return {
        artistes,
        iso: null
      };
    },
    asyncData() {
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve({})
        }, 1000)
      })
    },
  mounted() {
    this.$Lazyload.$on('loaded', function ({ el, src, $parent }) {
      $(el).parent('.volet1').parent('.effect').addClass("loaded");
    });
    if ($(window).width() > 599) {
       $('.button-stage button, .other-stage button').each( function() {
            var search = $(this).html();
            var replace = '<div class="mini-circle"><div class="center-circle"></div></div>' + search ;
            var el = $(this);
            var text = el.html();
            text = text.split(search).join(replace);
            el.html(text);
        });
    };
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function( event ) {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          var $button = $( event.currentTarget );
          $button.addClass('is-checked');
        });
    });
    this.isotope();
  },
  methods: {
    isotope() {
            this.iso = new Isotope(".grid", {
              itemSelector: ".grid-item"
            });
            // store filter for each group
            var filters = {};

            $('#filters').on( 'click', '.button', function( event ) {
                var $button = $( event.currentTarget );
                // get group key
                var $buttonGroup = $button.parents('.button-group');
                var filterGroup = $buttonGroup.attr('data-filter-group');
                // set filter for group
                filters[ filterGroup ] = $button.attr('data-filter');
                // combine filters
                var filterValue = concatValues( filters );
                // set filter for Isotope
                $grid.isotope({ filter: filterValue });
            });

            // change is-checked class on buttons
            $('.button-group').each( function( i, buttonGroup ) {
                var $buttonGroup = $( buttonGroup );
                $buttonGroup.on( 'click', 'button', function( event ) {
                  $buttonGroup.find('.is-checked').removeClass('is-checked');
                  var $button = $( event.currentTarget );
                  $button.addClass('is-checked');
                });
            });

            // flatten object by concatting values
            function concatValues( obj ) {
                var value = '';
                for ( var prop in obj ) {
                  value += obj[ prop ];
                }
                return value;
            }
      this.iso.layout();
    },
    filter: function(message, event) { 
    }
  }
}
</script>
<style>
  @media only screen and (min-width:960px) and (max-width:1264px){}
  @media only screen and (min-width:600px) and (max-width:959px){}
  @media only screen and (max-width:599px){}
</style>
