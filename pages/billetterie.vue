<template>
  <div class="page ticket">
    <div id="parallax" data-image-src="https://electrobotik.netlify.com/images/fondfestival.jpg">
       <nuxt-link to="/" class="header-link" ><img id="logo" class="partenaires" src="https://electrobotik.netlify.com/images/logo.svg"  alt="logo"></nuxt-link>
       <nuxt-link to="/" class="header-link" ><img class="small-logo partenaires" src="https://electrobotik.netlify.com/images/logo-horizontal.svg" alt="logo"></nuxt-link>
       <div class="container-infos scene_element scene_element--fadein">
          <h2>BILLETTERIE</h2>
       </div>
       <div class="slide">
           <div class="container">
              <div class="color">
                  <p>Electrobotik Invasion utilise une billeterie dématérialisée en coopération avec notre nouveau partenaire Festik. 
                  Ne dévoilez jamais votre code barre sur les réseaux au risque de vous faire pirater votre billet. En cas de rachat 
                  de billet, utilisez les plateformes sécurisées de revente pour être certains de ne pas acquérir une contrefaçon ! 
                  Méfiez-vous également du marché noir !</p>
              </div>
              <div class="vignette voiture">
                  <div class="center">
                      <p class="gras large">PASS 2 JOURS</p>
                      <p class="gras">AVEC CAMPING</p>
                      <p class="gras price">85€</p>
                      <p class="loc">Frais de loc. non inclus</p>
                  </div>
              </div><!--
              --><div class="vignette avion">
                  <div class="center">
                      <p class="gras large">PASS 2 JOURS</p>
                      <p class="gras">SANS CAMPING</p>
                      <p class="gras price">75€</p>
                      <p class="loc">Frais de loc. non inclus</p>
                  </div>
              </div><!--
              --><div class="vignette train">
                  <div class="center">
                      <p class="gras large">TICKET 1 JOUR</p>
                      <p class="gras">VEN. ou SAM.</p>
                      <p class="gras price">40€</p>
                      <p class="loc">Frais de loc. non inclus</p>
                  </div>
              </div>
              <div class="no-color">
                  <p class="gras">ZONE CAMPING : BAR, ANIMATION &#38; SCENE AVEC <a src="http://www.talowa.fr/tdc-fr/" class="artiste-link2" >TALOWA DUB CLUB</a></p>
              </div>
              <a title="Billetterie Festik" 
              href="https://electrobotik.festik.net/electrobotik-invasion" 
              class="festik-module" target="_blank"
              data-src="https://engine.festik.net/module/electrobotik/1/*"
              data-iframe-id="iframe-festik-electrobotik-1-*"
              data-billetterie-slug="electrobotik"
              data-spectacle-numero="1"
              data-representation-numero="*">
                  Achetez vos billets directement sur festik.net...
              </a>
              <script type="text/javascript"
src="https://engine.festik.net/assets/js/festik.module.js"></script>
              <div class="no-color">
                  <p class="gras large">VOUS NE TROUVEZ PAS VOTRE BILLETS DANS VOS MAILS ?</p>
                  <p class="medium">Regardez dans vos SPAMS, il peut arriver que les billets s'y retrouvent.</p>
                  <p> Où puis-je avoir des informations sur l'impression de mon billet ? Le renommage de mon billet ? Des renseignements sur le transport des bus ? La garantie annulation etc... ? Merci de consulter l'onglet <nuxt-link to="/infos-pratique">FAQ</nuxt-link> de notre site web !</p>
              </div>
           </div>
        </div>
      </div>
  </div>
</template>
<script>
  import $ from 'jquery'
  // export
  export default {
    layout: 'default',
    components: { },
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
  }
</script>
