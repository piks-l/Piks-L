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
      <p>© Copyright 2019 Sebatien-Odd - All Rights Reserved</p>
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
}
#footer .navigation, 
#footer .reseaux, 
#footer .copyright {
  display: block;
  position: relative;
  text-align: center;
}
#footer .reseaux a{
  color:#CCCCCC;
}
#footer .copyright p {
    line-height: 51px;
}
#footer a:hover {
  color: #ffffff;
  background: #ffb413;
}
</style>
