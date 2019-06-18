<template>
  <div id="main" :class="'ea-layout-'+this.$route.name">
    <div class="ea_col ui-left">
      <nuxt-link to="/"><ui-logo/></nuxt-link>
      <ui-menu class="ea-menu" />
    </div>
    <div class="ea_col mobile-menu">
      MENU
    </div>
    <div class="ea_col ui-content">
      <nuxt/>
    </div>
    <div class="ea_col ui-right">
      <div class="deco-video">
        <video autoplay="autoplay" loop="loop" muted="muted">
          <source src="/videos/etiquette-noir.mp4" type="video/mp4">
        </video>
      </div>
    </div>
    <div class="ea_col ui-footer">
      <ui-footer/>
    </div>
    <ui-background/>
  </div>
</template>
<script>
  import $ from 'jquery'
  import uiLoading from '~/components/ui/loading.vue'
  import uiLogo from '~/components/ui/logo.vue'
  import uiMenu from '~/components/ui/menu.vue'
  import uiFooter from '~/components/ui/footer.vue'
  import uiBackground from '~/components/ui/background.vue'
  export default {
      components: {
          uiLoading,
          uiLogo,
          uiMenu,
          uiFooter,
          uiBackground
      },
      mounted () {
      }
  }
</script>
<style>
 /* For mobile phones: */
#main {
  display: grid;
  grid-template-columns: [left-start] 150px [left-end main-start] 1fr [main-end right-start] 150px [right-end];
  grid-gap: 20px;
}
#main .ea_col {
  width: 100%;
  height: 150px;
}
#main .mobile-menu{
  grid-column: left-start / right-end;
  display:block;
}
#main .ui-content{
  grid-column: left-start / right-end;
}
#main .ui-left,
#main .ui-right{
  display:none;
}
#main .ui-footer {
  grid-column: left-start / right-end;
}

/* For tablets: */
@media only screen and (min-width: 600px) {
  #main {
    display: grid;
    grid-template-columns: [left-start] 150px [left-end main-start] 1fr [main-end right-start] 150px [right-end];
    grid-gap: 20px;
  }
  #main .ea_col {
    width: 100%;
    height: 150px;
  }
  #main .mobile-menu{
    display:none;
  }
  #main .ui-content{
    grid-column: left-end / right-start;
  }
  #main .ui-left,
  #main .ui-right{
    display:block;
  }
  #main .ui-footer {
    grid-column: left-start / right-end;
  }
  
}
/* For desktop: */
@media only screen and (min-width: 768px) {
  #main {
    display: grid;
    grid-template-columns: [left-start] 150px [left-end main-start] 1fr [main-end right-start] 150px [right-end];
    grid-gap: 20px;
  }
  #main .ea_col {
    width: 100%;
    height: 150px;
  }
  #main .mobile-menu{
    display:none;
  }
  #main .ui-left,
  #main .ui-right{
    display:block;
  }
  #main .ui-footer {
    grid-column: left-start / right-end;
  }
} 
</style>
