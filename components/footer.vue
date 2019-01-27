<template>
    <footer id="footer">
     <div class="topnav-centered">
      <nuxt-link class="effect-left" to="/">Accueil</nuxt-link>
      <nuxt-link class="no-active" to="/">Biographie</nuxt-link>
      <nuxt-link class="no-active" to="/blog/">Actualités</nuxt-link>
      <nuxt-link class="no-active" to="/artworks/">Artworks</nuxt-link>
      <nuxt-link class="no-active" to="/tattoos/">Tattoos</nuxt-link>
      <nuxt-link class="effect-right" to="/contact/">Contact</nuxt-link> 
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
