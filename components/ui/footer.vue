<template>
  <footer id="footer">
    <div class="navigation">
      <nuxt-link to="/">Accueil</nuxt-link>
      <nuxt-link to="/biographie/">Biographie</nuxt-link>
      <nuxt-link to="/blog/">Actualités</nuxt-link>
      <nuxt-link to="/artworks/">Artworks</nuxt-link>
      <nuxt-link to="/tattoos/">Tattoos</nuxt-link>
      <nuxt-link to="/contact/">Contact</nuxt-link> 
    </div>
    <div class="reseaux">
      <a target="_blank" href="https://www.facebook.com/sebastienoddtattoo/"><i class="fab fa-facebook-f"></i></a>
      <a target="_blank" href="https://twitter.com/sebastienodd"><i class="fab fa-twitter"></i></a>
      <a target="_blank" href="https://www.instagram.com/sebastien_odd_tattoo/"><i class="fab fa-instagram"></i></a>
      <a target="_blank" href="https://www.youtube.com/channel/UCH8hl7gSMTr4TcBSIF8PiwA"><i class="fab fa-youtube"></i></a>
      <a target="_blank" href="mailto:sebastienoddtattoos@gmail.com"><i class="fas fa-at"></i></a>
      <a target="_blank" href="tel:+33641850394"><i class="fas fa-phone"></i></a>
    </div>
    <div class="copyright">
      <p>© 2019 <a href="https://sebastien-odd.tattoo">Sebatien-Odd</a> - Tous droits réservés</p>
    </div>
  </footer>
</template>
<style>

/* FOOTER */
#footer {
  background-color: #000000;
  overflow: hidden;
  position: relative;
  bottom: 0;
  width: 100%;
  padding: 25px 0px;
}

/* FOOTER GENERAL */
#footer .navigation, 
#footer .reseaux,
#footer .copyright {
  display: block;
  position: relative;
  text-align: center;
}
#footer a {
  color: #f2f2f2;
  padding: 15px 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;
}

/* FOOTER NAVIGATION */
#footer .navigation a.nuxt-link-active {
    color: #525252 !important;
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

/* FOOTER RESEAUX */
#footer .reseaux a {
  color: #525252;
}
#footer .reseaux a:hover {
  color: #FFFFFF;
}

/* FOOTER COPYRIGHT */
#footer .copyright p {
    line-height: 51px;
}
#footer .copyright a {
    padding: 0;
}

</style>
