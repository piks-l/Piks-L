<template>
  <main class="page" :data-back="background" :data-duo="type">
     <h2>{{ title }}</h2>
     <p>{{ semaine }}</p>
     <p>{{ type }}</p>
     <p>{{ start }} > {{ end }}</p>    
  </main>
</template>
<script>
import $ from 'jquery'
import VueMarkdown from 'vue-markdown'
import VueLazyload from 'vue-lazyload'
export default {
  layout: 'default',
  transition: { name: 'intro', mode: 'out-in' },
  components: { VueMarkdown, VueLazyload },
  async asyncData({ params }) {
    let page = await import('~/content/programmation/page/' + params.slug + '.json');
    return page;
  },
  head() {
    return {
      title: `${this.title}`,
      meta: [
        { hid: 'description', name: 'description', content: `${this.description}` },
        { 'property': 'og:title', 'content': `${this.title}`, 'vmid': 'og:title' },
        { 'property': 'og:description', 'content': `${this.description}` },
        { 'property': 'og:image', 'content': `${this.thumbnail}`, 'vmid': 'og:image' }
      ]
    }
  },
  mounted() {
    this.switchBackground();
  },
  destroyed() {
    this.killBackground();
  },
  methods: {
    switchBackground() {
      var back = $('main').attr('data-back');
      var duo = $('main').attr('data-duo');
      $('.main-background').fadeOut(100, function(){
          $('.main-background').attr('xlink:href', back).bind('onreadystatechange load', function(){
            $('.anim-filter').addClass("duotone-"+duo);
            $('.main-background').fadeIn(100);
          });
      });
    },
    killBackground() {
      var duo = $('main').attr('data-duo');
      setTimeout(function(){  
        $('.main-background').fadeOut(100, function(){
            $('.main-background').attr('xlink:href', '/images/background-1-electro-alternativ.jpg').bind('onreadystatechange load', function(){
                $('.anim-filter').removeClass("duotone-"+duo);
                $('.main-background').fadeIn(100);
            });
        });
      }, 900);
    }
    
  }
};
</script>
<style>
.duotone-nuit {
  background-color:    #f900ff;
  display:             flex;
  flex:                1 1 100%;
  height:              100%;
  overflow:            hidden;
  padding:             0px;
  position:            relative;
  mix-blend-mode: hard-light;
}
.duotone-nuit .main-background {
  filter:              grayscale(100%) contrast(1) blur(0px);
  flex:                1 0 100%;
  height:              100%;
  max-width:           100%;
  mix-blend-mode:      hard-light;
  object-fit:          cover;
  opacity:             1;
  position:            relative;
  width:               100%;
}
.duotone-nuit::before {
  background-color:    #0ff;
  bottom:              0;
  content:             '';
  height:              100%;
  left:                0;
  mix-blend-mode:      multiply;
  position:            absolute;
  right:               0;
  top:                 0;
  width:               100%;
  z-index:             1;
}

.duotone-soiree {
  background-color:    #0000ff;
  display:             flex;
  flex:                1 1 100%;
  height:              100%;
  overflow:            hidden;
  padding:             0px;
  position:            relative;
}
.duotone-soiree .main-background {
  filter:              grayscale(100%) contrast(1) blur(0px);
  flex:                1 0 100%;
  height:              100%;
  max-width:           100%;
  mix-blend-mode:      hard-light;
  object-fit:          cover;
  opacity:             1;
  position:            relative;
  width:               100%;
}
.duotone-soiree::before {
  background-color:    #f900ff;
  bottom:              0;
  content:             '';
  height:              100%;
  left:                0;
  mix-blend-mode:      multiply;
  position:            absolute;
  right:               0;
  top:                 0;
  width:               100%;
  z-index:             1;
}
</style>
