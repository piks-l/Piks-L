<template>
  <footer id="footer">
    <div class="reseaux">
      <a target="_blank" href="https://www.facebook.com/ElectrobotikInvasion"><i class="fab fa-facebook-f"></i></a>
      <a target="_blank" href="https://www.instagram.com/electrobotik_invasion/"><i class="fab fa-instagram"></i></a>
      <a target="_blank" href="https://www.youtube.com/channel/UCin2oNXJUVgk7jYliy-dg5A"><i class="fab fa-youtube"></i></a>
      <nuxt-link to="/billetterie/"><i class="fas fa-ticket-alt"></i></nuxt-link>
    </div>
    <div class="copyright">
      <p>© <nuxt-link data-hover to="www.electrobotikinvasion.com">ELECTROBOTIK INVASION</nuxt-link> - Tous droits réservés</p>
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
  color: #FFFFFF;
}
#footer .copyright a:hover {
  color: #FCFCFC;
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
