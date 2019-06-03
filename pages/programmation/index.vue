<template>
  <main id="main-container">
      <div  class="container scene_element scene_element--fadein padding">
        <header id="header">
          <div class="sticky-container">
              <div id="filters">
                <h1>SOIREES</h1>
                <div class="button-date button-group"  data-filter-group="date">
                    <div class="center">
                        <button class="button is-checked" data-filter="*">ALL</button>
                        <span>/</span>
                        <button class="button" data-filter=".jour">Jour</button>
                        <span>/</span>
                        <button class="button" data-filter=".soiree">Soirée</button>
                        <span>/</span>
                        <button class="button" data-filter=".nuit">Nuit</button>
                    </div>
                </div>
                <div class="stage">
                  <div class="center">
                    <div class="button-stage button-group"  data-filter-group="stage">
                        <button class="button active" data-filter=".semaine1"><span>Semaine</span> 1</button>
                        <button class="button active" data-filter=".semaine2"><span>Semaine</span> 2</button>
                        <button class="button active" data-filter=".semaine3"><span>Semaine</span> 3</button>
                        <button class="button active" data-filter=".semaine4"><span>Semaine</span> 4</button>
                        <button class="button any" data-filter=""></button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </header>
          <div class="grid">
              <div v-for="event in programmation" :key="event.date"  :class="event.type+' '+event.semaine" class="element-item">
                   <nuxt-link :to="event._path+'/'">
                      <div class="effect">
                          <div class="volet1">
                              <img class="lazy" v-lazy="event.thumbnail" :alt="event.title">
                              <div class="boxshadow"></div>
                              <h3 class="name small">{{event.dateevents}} - {{event.start}} à {{event.end}} </h3>
                          </div>
                          <div class="volet2"></div>
                          <div class="border-bot"></div>
                      </div>
                  </nuxt-link>
              </div>
          </div>
      </div>
  </main>
</template>
<script>
  // import
  let Isotope;
  if (process.browser) { Isotope = require("isotope-layout"); }
  import $ from 'jquery'
  import VueLazyload from 'vue-lazyload'
  // export
export default {
    layout: 'default',
    transition: { name: 'intro', mode: 'out-in' },
    components: { VueLazyload},
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
      const context = require.context('~/content/programmation/page/', false, /\.json$/);
      const programmation = context.keys().map(key => ({
        ...context(key),
        _path: `/programmation/${key.replace('.json', '').replace('./', '')}`
      }));
      return {
        programmation,
        grid: null
      };
    },
  mounted() {
    this.$Lazyload.$on('loaded', function ({ el, src, $parent }) {
      $(el).parent('.volet1').parent('.effect').addClass("loaded");
    });
    this.isotope();
  },
  methods: {
    isotope() {
            var grid = new Isotope(".grid", {
              itemSelector: ".element-item"
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
                grid.arrange({ filter: filterValue });
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
            $('.button-group').each( function( i, buttonGroup ) {
                var $buttonGroup = $( buttonGroup );
                $buttonGroup.on( 'click', 'button', function( event ) {
                  $buttonGroup.find('.is-checked').removeClass('is-checked');
                  var $button = $( event.currentTarget );
                  $button.addClass('is-checked');
                });
            });
            $( ".button-date button" ).click(function() {
              $( ".button-stage .any" ).click();
              $('.button-stage button, .other-stage button').each( function() {
                  $( this ).addClass( "active" );
                  $( ".button-date" ).removeClass( "mobile-active" );
              });
            });
            $( ".button-stage button, .other-stage button" ).click(function() {
              $('.button-stage button, .other-stage button').each( function() {
                  $( this ).removeClass( "active" );
                  $( ".stage" ).removeClass( "mobile-active" );
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
            grid.layout();
    }
  }
}
</script>
