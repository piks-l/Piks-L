<template>
  <footer id="footer">
    <div class="navigation">
      <nuxt-link data-hover to="/programmation/">PROGRAMMATION</nuxt-link>
      <nuxt-link data-hover to="/billeterie/">BILLETTERIE</nuxt-link>
      <nuxt-link data-hover to="/festival/">FESTIVAL</nuxt-link>
      <nuxt-link data-hover to="/infos-pratiques/">INFOS PRATIQUES</nuxt-link>
      <nuxt-link data-hover to="/partenaires/">PARTENAIRES</nuxt-link> 
    </div>
    <div class="reseaux">
      <a target="_blank" href="https://www.facebook.com/ElectrobotikInvasion"><i class="fab fa-facebook-f"></i></a>
      <a target="_blank" href="https://www.instagram.com/electrobotik_invasion/"><i class="fab fa-instagram"></i></a>
      <a target="_blank" href="https://www.youtube.com/channel/UCin2oNXJUVgk7jYliy-dg5A"><i class="fab fa-youtube"></i></a>
      - 
      <nuxt-link to="/billeterie/"><i class="fas fa-ticket-alt"></i></nuxt-link>
    </div>
    <div class="copyright">
      <p>© <nuxt-link data-hover href="www.electrobotikinvasion.com">ELECTROBOTIK INVASION</nuxt-link> - Tous droits réservés</p>
    </div>
  </footer>
</template>

<script>
export default {
  components: {
  }
}
</script>
<style>
/* FOOTER */
#footer {
  overflow: hidden;
  /*position: relative;*/
  bottom: 0;
  width: 100%;
}

/* FOOTER GENERAL */
#footer .navigation, 
#footer .reseaux,
#footer .copyright {
  display: block;
  position: relative;
  text-align: center;
}
#footer .reseaux {
  background: #151515;
}
#footer .copyright {
  background: #000;
}
#footer .copyright a {
  color: #000;
}
#footer .copyright a:hover {
  color: #FFB413;
}
#footer a {
  color: #525252;
  padding: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;
}
#footer a:hover {
  color: #cecece;
}

/* FOOTER NAVIGATION */
#footer .navigation a.nuxt-link-active {
    color: #525252 !important;
}
#footer .navigation a::after {
    content: "";
    width: 100%;
    top: 50%;
    height: 6px;
    background: linear-gradient(0.25turn, #0079ff, #b24576);
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
