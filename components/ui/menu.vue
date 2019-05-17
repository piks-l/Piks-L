<template>
  <div>
          <div class="menu scene_element scene_element--fadeindown">
          <div class="slash1"></div>
          <div class="slash2"></div>
          <div class="menu-content">
              <div class="big-logo">
                  <img class="logo large-logo" src="https://electrobotik.netlify.com/images/logo.svg"  alt="logo">
                  <img class="logo small-logo" src="https://electrobotik.netlify.com/images/logo-horizontal.svg"  alt="logo">
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
                              <li><a href="index.html" >PROGRAMMATION</a></li>
                              <li><a href="billetterie.html">BILLETTERIE</a></li>
                              <li><a href="#" >LE FESTIVAL</a></li>
                              <li><a href="#" >INFOS-PRATIQUES</a></li>
                              <li><a href="#" >PARTENAIRES</a></li>
                          </ul>
                      </div>
                  </div>
                  <div class="social">
                      <a href="#" alt="FB"><i class="fab fa-facebook-f"></i></a>
                      <a href="#" alt="IT"><i class="fab fa-instagram"></i></a>
                      <a href="#" alt="YT"><i class="fab fa-youtube"></i></a>
                  </div>
                  <div class="news">
                      <a href="#" class="newsletter" alt="">NEWSLETTER</a>
                      <a href="#" class="presse" alt="">ESPACE PRESSE</a>
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
.button-group {

    display: block;
    position: relative;
    margin-left: 20%;

}
</style>
