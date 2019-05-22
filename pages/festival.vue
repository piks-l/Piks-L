<template>
  <div class="page festival">
    <div id="parallax" data-image-src="https://electrobotik.netlify.com/images/fondbilletterie.jpg">
        <nuxt-link to="/" class="header-link" ><img id="logo" class="partenaires" src="https://electrobotik.netlify.com/images/logo.svg"  alt="logo"></nuxt-link>
       <nuxt-link to="/" class="header-link" ><img class="small-logo partenaires" src="https://electrobotik.netlify.com/images/logo-horizontal.svg" alt="logo"></nuxt-link>
       <div class="container-infos scene_element scene_element--fadein">
          <h2>LE FESTIVAL</h2>
       </div>
       <div class="slide">
           <div class="container">
              <div class="color">
                  <p>Le rendez-vous musical incontournable de l'été, ELECTROBOTIK INVASION, fait son grand retour au circuit Paul Ricard pour fêter son dixième anniversaire les 2 et 3 août 2019.
                   Par l'originalité de son concept et sa sélection musical, il est l'exception dans l'uniformisation du paysage des événements électroniques.
                   L'espace de deux nuits, le festival s'installera des pieds dans l'herbe sur une zone verte et ombragée au bord de la piste du circuit Paul Ricard pour créer un village éphémère où se mêleront l'univers des fêtes foraines, les nouvelles technologies &amp; les arts de la rue.</p>
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
