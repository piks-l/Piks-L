<template>
  <div id="main-container">
    <div id="parallax" data-image-src="https://electrobotik.netlify.com/images/crop.jpg">
      <div  class="container scene_element scene_element--fadein padding">
        <nuxt-link to="/"><img id="logo" src="https://electrobotik.netlify.com/images/logo-basic.svg" alt="logo"></nuxt-link>
        <header id="header">
          <div class="sticky-container">
              <nuxt-link to="/"><img id="sticky-logo" class="logo" src="https://electrobotik.netlify.com/images/logo-horizontal.svg"  alt="logo"></nuxt-link>
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
        grid: null
      };
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
                    function parallax() {
          // Populate images from data attributes.
          var scrolled = $(window).scrollTop()
          $('#parallax').each(function(index) {
              var imageSrc = $(this).data('image-src')
              var imageHeight = $(this).data('height')
              $(this).css('background-image','url(' + imageSrc + ')')
              $(this).css('height', imageHeight)

              // Adjust the background position.
              var initY = $(this).offset().top
              var height = $(this).height()
              var diff = scrolled - initY
              var ratio = Math.round((diff / height) * 100)
              $(this).css('background-position','center ' + parseInt(-(ratio * 3.5)) + 'px')
          })

          // Attach scroll event to window. Calculate the scroll ratio of each element
          // and change the image position with that ratio.
          // https://codepen.io/lemagus/pen/RWxEYz
          $(window).scroll(function() {
            var scrolled = $(window).scrollTop()
            $('#parallax').each(function(index, element) {
              var initY = $(this).offset().top
              var height = $(this).height()
              var endY  = initY + $(this).height()

              // Check if the element is in the viewport.
              var visible = isInViewport(this)
              if(visible) {
                var diff = scrolled - initY
                var ratio = Math.round((diff / height) * 100)
                $(this).css('background-position','center ' + parseInt(-(ratio * 3.5)) + 'px')
              }
            })
          })
          function isInViewport(node) {
            // Am I visible? Height and Width are not explicitly necessary in visibility
            // detection, the bottom, right, top and left are the essential checks. If an
            // image is 0x0, it is technically not visible, so it should not be marked as
            // such. That is why either width or height have to be > 0.
            var rect = node.getBoundingClientRect()
            return (
              (rect.height > 0 || rect.width > 0) &&
              rect.bottom >= 0 &&
              rect.right >= 0 &&
              rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.left <= (window.innerWidth || document.documentElement.clientWidth)
            )
          }
      	}
        parallax();
    },
    filter: function(message, event) { 
    }
  }
}
</script>
