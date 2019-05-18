<template>
  <div>
          <div class="menu scene_element scene_element--fadeindown">
          <div class="slash1"></div>
          <div class="slash2"></div>
          <div class="menu-content">
              <div class="big-logo">
                <nuxt-link to="/"><img class="logo large-logo" src="https://electrobotik.netlify.com/images/logo-basic.svg"  alt="logo"></nuxt-link>
                <nuxt-link to="/"><img class="logo small-logo" src="https://electrobotik.netlify.com/images/logo-horizontal.svg" alt="logo"></nuxt-link>
              </div>
              <div class="menu-info">
                  <div class="circuit">
                      <h3>CIRCUIT PAUL RICARD - OPEN AIR FESTIVAL - 10TH ANNIVERSARY</h3>
                  </div>
                  <div class="pagination">
                      <div class="date">
                          <div class="date-circle">
                              <img src="https://electrobotik.netlify.com/images/circle.svg"/>
                              <div class="content-date">
                                  <p class="big-date">02<small>&amp;</small>03</p>
                                  <p class="month">AOÛT 2019</p>
                              </div>
                          </div>
                      </div>
                      <div class="navigation">
                          <ul class="nav">
                            <li><nuxt-link class="menu-link" to="/programmation/">PROGRAMMATION</nuxt-link></li>
                            <li><nuxt-link class="menu-link" to="/billetterie/">BILLETTERIE</nuxt-link></li>
                            <li><nuxt-link class="menu-link" to="/festival/">LE FESTIVAL</nuxt-link></li>
                            <li><nuxt-link class="menu-link" to="/infos-pratiques/">INFOS-PRATIQUES</nuxt-link></li>
                            <li><nuxt-link class="menu-link" to="/partenaires/">PARTENAIRES</nuxt-link></li>
                          </ul>
                      </div>
                  </div>
                  <div class="social">
                    <a target="_blank" href="https://www.facebook.com/ElectrobotikInvasion"><i class="fab fa-facebook-f"></i></a>
                    <a target="_blank" href="https://www.instagram.com/electrobotik_invasion/"><i class="fab fa-instagram"></i></a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCin2oNXJUVgk7jYliy-dg5A"><i class="fab fa-youtube"></i></a>
                  </div>
                  <div class="news">
                      <a href="#" class="newsletter" alt="">NEWSLETTER</a>
                      <nuxt-link to="partenaires" class="presse">ESPACE PRESSE</nuxt-link>
                  </div>
              </div>
          </div>

          <div class="close">
  					  <div class="left"></div>
              <div class="right"></div>
  				</div>
      </div>
      <button class="open-menu"><span>Menu</span></button>
      <button class="select-date"><span>DATES</span></button>
      <button class="select-stage"><span>STAGES</span></button>
</div>
</template>
<script>
  import $ from 'jquery'
  export default {
    mounted: () => {
     console.log("Menu mounted");
    } // Mounted end
  } // Export end 
</script>
<style>
</style>
