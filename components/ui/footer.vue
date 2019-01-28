<template>
  <footer id="footer">
    <div class="navigation">
      <nuxt-link to="/">Accueil</nuxt-link>
      <nuxt-link to="/">Biographie</nuxt-link>
      <nuxt-link to="/blog/">Actualités</nuxt-link>
      <nuxt-link to="/artworks/">Artworks</nuxt-link>
      <nuxt-link to="/tattoos/">Tattoos</nuxt-link>
      <nuxt-link to="/contact/">Contact</nuxt-link> 
    </div>
    <div class="reseaux">
      <a href="#"><i class="fab fa-facebook-f"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
      <a href="#"><i class="fab fa-youtube"></i></a>
    </div>
    <div class="copyright">
      <p>© Copyright 2019 <a href="https://sebastien-odd.tattoo">Sebatien-Odd</a> - All Rights Reserved</p>
    </div>
  </footer>
</template>
<style>
#footer {
  background-color: #000000;
  overflow: hidden;
  position: relative;
  bottom: 0;
  width: 100%;
  padding: 25px 0px;
}
#footer a {
  color: #f2f2f2;
  padding: 15px 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;
}
#footer .navigation a::after {
    content: "";
    width: 100%;
    top: 50%;
    height: 3px;
    background: #ffb413;
    position: absolute;
    left: 0;
    opacity: 0;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: opacity .3s,-webkit-transform .3s;
    transition: opacity .3s,-webkit-transform .3s;
    transition: transform .3s,opacity .3s;
    transition: transform .3s,opacity .3s,-webkit-transform .3s;
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
}
#footer .navigation a:hover::after {
    opacity: 1;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    color: #ffb413; 
}
#footer .navigation, 
#footer .reseaux, 
#footer .copyright {
  display: block;
  position: relative;
  text-align: center;
}
#footer .reseaux a {
  color: #525252;
}
#footer .reseaux a:hover {
  color: #FFFFFF;
}
#footer .copyright p {
    line-height: 51px;
}
</style>
