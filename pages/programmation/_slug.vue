<template>
  <main class="ea-layout-evenement" :data-back="background" :data-duo="type">
    <h2 class="ea-titre"><nuxt-link class="title-artiste" :to="'/artistes/'+artist.artiste" v-for="artist in groupes" :key="artist.artiste">{{artist.artiste}}</nuxt-link></h2>
    <article class="ea-article-evenement">
       <div class="informations">
          <p class="date-event">{{ datehumaine }}</p>
          <p class="date-time">de <span>{{ start }}</span> à <span>{{ end }}</span></p>
          <div class="reserver">
              <i class="fab fa-facebook-square"></i> 
              <a target="_blank" :href="'https://www.facebook.com/events/'+ idfb +'/'" alt="Événement Facebook">PARTICIPER</a>
          </div>
       </div>
       <div class="slider-evenement">
          <div class="slider__nav">
           <span id="moveLeft" class="slider__arrow">
              <svg class="slider__icon" width="24" height="24" viewBox="0 0 24 24">
                <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
              </svg>
            </span>
            <span id="moveRight" class="slider__arrow" >
              <svg class="slider__icon"  width="24" height="24" viewBox="0 0 24 24">
                <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
              </svg>    
            </span>
          </div>
         <div v-for="(img, i) in galerie" :key="img" class="slider-item">
            <div class="slider-item__image" :style="{ backgroundImage: `url(${img})` }"></div>
          </div>
      </div>
      <div class="shop">
          <div class="tarif">TARIF :</div>
          <div class="billetterie">
              <a href="#">acheter vos billets</a>
          </div>
          <div class="link-map">
              <i class="fas fa-map-marked-alt"></i>
              <nuxt-link :to="'/lieux/'+lieu">{{ lieu }}</nuxt-link>
          </div>
      </div>
      <vue-markdown class="description">{{description}}</vue-markdown>
    </article>
    <div class="nav-select">
        <div class="prev-event">&#60;  Soirée précédente</div>
        <div class="next-event">Soirée suivante  &#62;</div>
    </div>
    <div class="social">
        <a target="_blank" href="https://www.facebook.com/electroalternativ" alt="Facebook EA"><i class="fab fa-facebook-f"></i></a>
        <a target="_blank" href="https://twitter.com/electroalternat" alt="Twitter EA"><i class="fab fa-twitter"></i></a>
        <a target="_blank" href="https://www.youtube.com/user/electroalternativ" alt="Youtube EA"><i class="fab fa-youtube"></i></a>
        <a target="_blank" href="https://www.instagram.com/electroalternativ/" alt="Instagram EA"><i class="fab fa-instagram"></i></a>
    </div>
    <nuxt-link class="retour" to="/programmation/"><b>PROGRAMMATION</b>RETOUR</nuxt-link>
  </main>
</template>
<script>
import $ from 'jquery'
import VueMarkdown from 'vue-markdown'
import VueLazyload from 'vue-lazyload'
import eaSidebarevenement from '~/components/sidebar-evenement.vue'
export default {
  layout: 'default',
  transition: { name: 'intro', mode: 'out-in' },
  components: { VueMarkdown, VueLazyload, eaSidebarevenement },
  async asyncData({ params }) {
    let page = await import('~/content/programmation/page/' + params.slug + '.json');
    return page;
  },
  head() {
    return {
      title: `${this.titre}`,
      meta: [
        { hid: 'description', name: 'description', content: `${this.description}` },
        { 'property': 'og:title', 'content': `${this.titre}`, 'vmid': 'og:title' },
        { 'property': 'og:description', 'content': `${this.description}` },
        { 'property': 'og:image', 'content': `${this.thumbnail}`, 'vmid': 'og:image' }
      ]
    }
  },
  updated() {
    this.initSlider();
  },
  beforeMount(){
    
  },
  mounted() {
    this.initSlider();
    this.switchBackground();
    this.countArtist();    
  },
  destroyed() {
    this.killBackground();
  },
  methods: {
    countArtist() {
      var count = 0;
      $(".slider-item__image").each(function() {
          count= count + 1 ;
      });
      if(count <= 1){
          $(".slider-evenement").addClass('no-nav');
      };
      $(".title-artiste, .link-map a").each(function() {
        var text = $(this).text();
        text = text.replace(/-/g, " ");
        $(this).text(text);
      });
    },
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
    initSlider() {
      $('.slider-evenement .slider-item').eq(0).addClass('active');
      var total = $('.slider-evenement .slider-item').length;
      var current = 0;
      $('.slider-evenement #moveRight').on('click', function(){
        var next=current;
        current= current+1;
        setSlide(next, current);
      });
      $('.slider-evenement #moveLeft').on('click', function(){
        var prev=current;
        current = current- 1;
        setSlide(prev, current);
      });
      function setSlide(prev, next){
        var slide= current;
        if(next>total-1){
         slide=0;
          current=0;
        }
        if(next<0){
          slide=total - 1;
          current=total - 1;
        }
       $('.slider-evenement .slider-item').eq(prev).removeClass('active');
       $('.slider-evenement .slider-item').eq(slide).addClass('active');
        setTimeout(function(){},800);
        console.log('current '+current);
        console.log('prev '+prev);
      }
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
      }, 500);
    }
    
  }
};
</script>

<style>

  /*Carousel*/
  .slider-evenement {
      height: 350px!important;
      width: 100%;
      display: flex;   
      overflow: hidden;
      position: relative;
  }
  .slider-item {
      visibility:visible;
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: flex-end;
      -webkit-align-items: center;
      -webkit-justify-content: flex-end;
      position: relative;
      background-color: #fff;
      flex-shrink: 0;
      -webkit-flex-shrink: 0;
      position: absolute;
      z-index: 0;
      transition: 0.6s all linear;
  }
  .slider-evenement .slider-item {
      left: 0%;
      background: black;
  }
  .slider-item__image {
      width: 100%;
      height: 100%;      
      align-self: flex-end;
      flex-basis: 100%;
      order: 1;
      -webkit-order: 1;    
      -webkit-align-self: flex-end;
      -webkit-flex-basis: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position:relative;
      transform: translateX(-100%);
      transition: 0.6s all ease-in-out;
  }
  .slider-evenement .slider-item__image {
      transform: translateX(100%);
      order: 2;
  }
  .slider-item__container {
      box-shadow: 0 0 0 40px #fff, 4px 0 0 38px #cecece;
  }
  .slider-evenement .slider-item__container {
      border-right: none;
      box-shadow: 0 0 0 40px #fff, -4px 0 0 38px #cecece;
  }
  .slider__nav {
      position: absolute;
      z-index: 2;
      background-color: #000;
      bottom: 0px;
  }
  .slider-evenement .slider__nav {
      left:0;  
  }
  .slider__icon {
      display: inline-block;
      vertical-align: middle;
      width: 16px;
      fill: #FFFFFF;
  }
  .slider__arrow {
      cursor: pointer;
      display: inline-block;
      padding: 11px 15px;
      position: relative;
  }
  .slider__arrow:nth-child(1):after {
      content:'';
      right: -3px;
      position: absolute;
      width: 1px;
      background-color: #b0b0b0;
      height: 14px;
      top: 50%;
      margin-top: -7px;
  }
  .active{
      z-index: 1;
      display: flex;
      visibility:visible;
  }
  .active .slider-item__image{ 
      transition: 0.6s all ease-in-out;
      transform: translateX(0);
}
</style>
