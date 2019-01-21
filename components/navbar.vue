<template>
 <div id="navbar">
    <div class="mobile-menu">
        <i class="fas fa-bars"></i>
        <i class="fas fa-times"></i>
    </div>
    <div class="menu">
      <img class="logo" src="https://www.lacourdesmiracles.tattoo/assets/img/Logo-Max-Black.png" alt="logo">
      <nuxt-link class="no-active" to="/">Accueil</nuxt-link>
      <nuxt-link class="no-active" to="/">Biographie</nuxt-link>
      <nuxt-link class="effect-right" to="/blog/">Actualités</nuxt-link>
      <nuxt-link class="effect-left" to="/artworks/">Artworks</nuxt-link>
      <nuxt-link class="effect-left" to="/tattoos/">Tattoos</nuxt-link>
      <nuxt-link class="effect-right" to="/contact/">Contact</nuxt-link> 
    </div>
    <div class="progress-container"><div class="progress-bar" id="myBar"></div></div> 
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    mounted: () => {
      window.onscroll = function() { scrollFunction() };
      function scrollFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;        
          document.getElementById("myBar").style.width = scrolled + "%";
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) { 
            if($( window ).width() >= 600){
                $("#navbar").addClass('active');
            }            
        } else {   
            $("#navbar").removeClass('active');
        }
      }
      $('.mobile-menu').on('click', function(){
          $("#navbar").toggleClass('active-mobile');
      });
      $('#navbar a').on('click', function(){
          if($( window ).width() <= 599){
              $("#navbar").removeClass('active-mobile');
          }          
      });
      $( window ).resize(function() {
          if($( window ).width() <= 599){
              $("#navbar").removeClass('active');
          } 
      });
    }
  }
</script>

<style>
  #navbar.hidden{
      overflow:hidden;
  }
  .progress-container {
    width: 100%;
    height: 8px;
    background: gray;
  }
  .progress-bar {
    height: 8px;
    background: black;
    width: 0%;
  }
  .mobile-menu {
      position: fixed;
      top: 15px;
      left: 50%;
      transform: translatex(-50%);
      color: #fff;
      font-size: 24px;
  }
  .menu {
      position: relative;
      display: inline-flex;
      left: 50%;
      -webkit-transform: translatex(-50%);
      transform: translatex(-50%);
      height: 100px;
  }
  #navbar {
      background-color: #FFF; 
      position: fixed;
      top: -50px; 
      width: 100%; 
      transition: top 0.3s; 
      font-family: titaniaregular;
      z-index: 10;      
  }
  #navbar.active{
      top:0;
  }
  #navbar a {
      color: grey;
      text-align: center;
      padding: 0 15px;
      text-decoration: none;
      font-size: 25px;
      display: inline-block;
      position: relative;
      min-width: 175px;
      line-height: 150px; 
      transition: all 0.3s ease;  
  }
  #navbar.active a{
      line-height: 100px; 
  }
  #navbar a::before {
      content: "";
      height: 10px;
      width: 0px;
      display: block;
      position: absolute;
      top: 90px;
      transition: all 0.3s ease;       
      background: #000; 
  }
  #navbar.active a::before{
      top: 75px;
  }
  #navbar .no-active:before{
      left: 50%;
      -webkit-transform: translatex(-50%);
      transform: translatex(-50%);
  }
  #navbar .effect-right:before,
  #navbar .effect-right:before{
      right:15px;
  }
  #navbar a:hover,
  #navbar a.nuxt-link-exact-active{
      color: black;
  }
  #navbar a:hover::before,
  #navbar a.nuxt-link-exact-active::before{
      width: calc(100% - 30px);
  }
  #navbar .logo {
      height: 100px;
      position: absolute;
      top: 50vh;
      left:50%;
      -webkit-transform: translatex(-50%) scale(1.75);
      transform: translatex(-50%) scale(1.75);
      -webkit-transition: all .3s ease;
      transition: all .3s ease;
  }
  #navbar.active .logo {
      -webkit-transform: translatex(-50%) scale(1);
      transform: translatex(-50%) scale(1);
      top:0;
  }
  .no-active {
      position: absolute;
      top: 0;
      width: calc(100% - 30px);
      transition: all .3s ease;
      opacity: 1;
  }
  #navbar .fa-times{
    display:none;
  }
  #navbar.active .no-active {
      opacity: 0;
  }
  #navbar.active#navbar.lightbox-active{
      top: -50px;
  }
  #navbar.active.lightbox-active a {
      line-height: 150px;
  }
  #navbar.active.lightbox-active a::before {
      top: 90px;
  }
  #navbar.active.lightbox-active .no-active {
      opacity: 1;
  }
  #navbar.active.lightbox-active .logo {
      height: 100px;
      top: 50vh;
      -webkit-transform: translatex(-50%) scale(1.75);
      transform: translatex(-50%) scale(1.75);
  }
  @media only screen and (min-width:960px) and (max-width:1264px){
  
  }
  @media only screen and (min-width:600px) and (max-width:959px){
      #navbar a {
          padding: 0 5px;
          font-size: 18px;
          min-width: 120px;
      }
      #navbar a.nuxt-link-exact-active::before, 
      #navbar a:hover::before {
          width: calc(100% - 10px);
      }
      #navbar .effect-right::before {
          right: 5px;
      }
      #navbar.active .logo {
          max-width:120px;
          height:auto;
          top:20px;
      }
      #navbar.lightbox-active .logo {
          height: 100px;
          top: 50vh;
          -webkit-transform: translatex(-50%) scale(1.75);
          transform: translatex(-50%) scale(1.75);
      }
  }
  @media only screen and (max-width:599px){
      #navbar {
          top: -100vh;
          height: 100vh;
      }
      #navbar.active-mobile{
          top:0;
      }
      #navbar.active-mobile .fa-times{
        display:block;
        color: #000;
      }
      #navbar.active-mobile .fa-bars{
        display:none;
      }
      .progress-container {
          position: absolute;
          top: 100vh;
      }
      .mobile-menu {
          z-index: 2;
          top:8px;
          line-height: 30px;
          height: 30px;
          width: 100%;
          text-align: center;
      }
      .menu {
          height: auto;
          z-index: 1;
          display: block;
          top: 50%;
          transform: translatey(-50%);
          left: 0;
      }
      #navbar a {
          padding: 0 15px;
          font-size: 25px;
          display: block;
          min-width: auto;
          line-height: 50px;
          width: 100%;
      }
      #navbar a::before {
          top: 40px;
      }
      #navbar .no-active {
          height: 150px;
          opacity: 0.4;
      }
      #navbar .no-active::before {
          height: 100%;
          top: 0;
          background: #fff;
          width: 100%;
      }
      #navbar .no-active:hover,
      #navbar .no-active.nuxt-link-exact-active{
          opacity: 0;
      }
      #navbar .logo {
          height: 150px;
          top: 50%;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
      }
      .mobile-menu .fa-bars {
          text-shadow:0 0 3px #000;
      }
  }
</style>
