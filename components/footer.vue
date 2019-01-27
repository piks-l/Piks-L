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
  background-color: #333;
  overflow: hidden;
  position: relative;
  bottom: 0;
  width: 100%;
}
.topnav-centered a {
  float: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#footer a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
#footer a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.navbar a.active {
  background-color: #4CAF50;
  color: white;
}
</style>
