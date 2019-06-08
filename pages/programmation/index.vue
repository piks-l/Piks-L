<template>
  <main>
      <div class="container">
          <ea-titre/>
          <div id="filters">
          <div class="button-type button-group"  data-filter-group="type">
              <div class="button is-checked" data-filter="*">ALL</div>
              <div class="button duoto" data-duo="jour" data-filter=".jour">Jour</div>
              <div class="button duoto" data-duo="soiree" data-filter=".soiree">Soirée</div>
              <div class="button duoto" data-duo="nuit" data-filter=".nuit">Nuit</div>
          </div>
          <div class="button-semaine button-group"  data-filter-group="semaine">
              <div class="button active" data-filter=".semaine1"><span>Semaine</span> 1</div>
              <div class="button active" data-filter=".semaine2"><span>Semaine</span> 2</div>
              <div class="button active" data-filter=".semaine3"><span>Semaine</span> 3</div>
              <div class="button active" data-filter=".semaine4"><span>Semaine</span> 4</div>
              <div class="button any" data-filter=""></div>
          </div>
          </div>
          <div class="grid">
              <div class="stamp stamp1"></div>
              <div class="stamp stamp2"></div>
              <div v-for="event in programmation" :key="event.date"  :class="event.type+' '+event.semaine" class="element-item">
                   <nuxt-link :to="event._path+'/'" >
                     <p class="grid-date" :data-date="event.dateevents"><strong>{{event.datehumaine}}</strong></p>
                     <div class="line"></div>
                     <p class="grid-time">{{event.start}} &rsaquo; {{event.end}}</p>
                     <p class="grid-artistes"><strong v-for="artist in event.groupes" :key="artist.artiste">{{artist.artiste}}</strong></p>
                     <p class="grid-lieu">{{event.lieu}}</p>
                     <p class="grid-intro"><small>{{event.intro}}</small></p>
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
  import eaTitre from '~/components/titre.vue'
  // export
export default {
    layout: 'default',
    components: { VueLazyload, eaTitre },
    transition: { name: 'outro', mode: 'out-in' },
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
      this.ea();
      this.switchBackground();
      $(".grid-lieu, .grid-artistes strong").each(function() {
          var text = $(this).text();
          text = text.replace(/-/g, " ");
          $(this).text(text);
      });
  },
  methods: {
     switchBackground() {
      $('.duoto').each( function( i, el ) {
        var duo =  $(el).attr('data-duo');
        $(el).click(function(el) {
            $('.anim-filter').removeClass("duotone-jour duotone-soiree duotone-nuit").addClass("duotone-"+duo);
            console.log(duo)
         });
      });
    },
    ea() {
            var grid = new Isotope(".grid", {
              itemSelector: ".element-item",
              stamp: '.stamp',
              getSortData : {
               date : function ($elem) {
                return $($elem).find('.grid-date').attr('data-date');
               }
              },
              sortBy : 'date',
              sortAscending : true
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
                $buttonGroup.on( 'click', '.button', function( event ) {
                  $buttonGroup.find('.is-checked').removeClass('is-checked');
                  var $button = $( event.currentTarget );
                  $button.addClass('is-checked');
                });
            });
            $( ".button-type .button" ).click(function() {
              $( ".button-semaine .any" ).click();
              $('.button-semaine .button').each( function() {
                  $( this ).addClass( "active" );
                  $( ".button-type" ).removeClass( "mobile-active" );
              });
            });
            $( ".button-semaine .button" ).click(function() {
              $('.button-semaine .button').each( function() {
                  $( this ).removeClass( "active" );
                  $( ".button-semaine" ).removeClass( "mobile-active" );
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
