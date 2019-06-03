<template>
    <nav>
      <div class="menu">
          <div class="deco-left"></div>
          <nuxt-link class="menu-logo menu-link" to="/"><ea-logo/></nuxt-link>
          <p>Évènement des cultures électroniques et digitales</p>
          <div class="deco-video">
            <video autoplay="autoplay" loop="loop" muted="muted">
              <source src="/videos/etiquette-noir.mp4" type="video/mp4">
            </video>
          </div>
          <div class="menu-info">
             <div class="navigation">
                <ul class="nav">
                  <li><nuxt-link class="menu-link" to="/festival/">LE FESTIVAL</nuxt-link></li>
                  <li><nuxt-link class="menu-link" to="/">PROGRAMMATION</nuxt-link></li>
                  <li><nuxt-link class="menu-link" to="/artistes/">ARTISTES</nuxt-link></li>
                  <li><nuxt-link class="menu-link" to="/">BILLETTERIE</nuxt-link></li>
                  <li><nuxt-link class="menu-link" to="/lieux/">LIEUX</nuxt-link></li>
                  <li><nuxt-link class="menu-link" to="/">MERCH</nuxt-link></li>
                  <li><nuxt-link class="menu-link" to="/">CONTACTS</nuxt-link></li>
                  <li><nuxt-link class="menu-link" to="/">PARTENAIRES</nuxt-link></li>
                </ul>
            </div>
          </div>
          <div class="social">
              <a href="#" alt="FB"><i class="fab fa-facebook-f"></i></a>
              <a href="#" alt="TW"><i class="fab fa-twitter"></i></a>
              <a href="#" alt="YT"><i class="fab fa-youtube"></i></a>
              <a href="#" alt="IT"><i class="fab fa-instagram"></i></a>
              <a href="#" alt="SP"><i class="fab fa-spotify"></i></a>
          </div>
          <div class="close">
  					  <div class="left"></div>
              <div class="right"></div>
  				</div>
          <div class="deco-bot"></div>
      </div>
      <button class="open-menu"><span>Menu</span></button>
    </nav>
</template>
<script>
  import $ from 'jquery'
  import eaLogo from '~/components/ui/logo.vue'
  export default {
    components: {
      eaLogo
    },
    mounted: () => {
        $( ".open-menu" ).click(function() { $( ".menu" ).addClass( "open" ); });
        $( ".close, .menu-link" ).click(function() { $( ".menu" ).removeClass( "open" ); });
    } // Mounted end
  } // Export end 
</script>

