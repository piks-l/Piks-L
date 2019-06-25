<template>
    <nav>
      <div class="menu">
          <div class="deco-left"></div>
          <div class="deco-right"></div>
          <div class="deco-bot"></div>
          <nuxt-link class="menu-logo menu-link" to="/"><ea-logo/></nuxt-link>
          <p>Évènement des cultures électroniques et digitales</p>
          <div class="menu-info">
             <div class="navigation">
                <ul class="nav">
                  <li><nuxt-link class="menu-link" to="/festival/">LE FESTIVAL</nuxt-link></li>
                  <li><nuxt-link class="menu-link" to="/programmation/">PROGRAMMATION</nuxt-link></li>
                  <li><nuxt-link class="menu-link" to="/artistes/">ARTISTES</nuxt-link></li>
                  <li><nuxt-link class="menu-link" to="/">BILLETTERIE</nuxt-link></li>
                  <li><nuxt-link class="menu-link" to="/lieux/">LIEUX</nuxt-link></li>
                  <li><nuxt-link class="menu-link" to="/">MERCH</nuxt-link></li>
                  <li><nuxt-link class="menu-link" to="/">CONTACTS</nuxt-link></li>
                  <li><nuxt-link class="menu-link" to="/">PARTENAIRES</nuxt-link></li>
                </ul>
            </div>
          </div>
          <ui-social class="social"/>
          <div class="ea-slider">
              <div class="slider"></div>
          </div>
          <div class="close">
  					  <div class="left"></div>
              <div class="right"></div>
  				</div>          
      </div>
      <button class="open-menu"><span>Menu</span></button>
    </nav>
</template>
<script>
  import $ from 'jquery'
  import uiLogo from '~/components/ui/logo.vue'
  import uiSocial from '~/components/social.vue'
  export default {
    components: {
      uiLogo,
      uiSocial,
    },
    mounted: () => {
        $( ".open-menu" ).click(function() { $( ".menu" ).addClass( "open" ); });
        $( ".close, .menu-link" ).click(function() { $( ".menu" ).removeClass( "open" ); });
    } // Mounted end
  } // Export end 
</script>

