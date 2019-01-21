<template>
  <div class="artist">
    <div :class="'intro artist-'+title">
      <img class="artist-cover" :src="couverture">
      <div class="header">
          <h2>{{ title }}</h2>    
          <vue-markdown>{{intro}}</vue-markdown>
      </div>
    </div>
    <div class="portfolio">
      <div class="works" v-for="(img, i) in galerie.slice().reverse()" :key="galerie.i">
          <div class="center" >
            <img class="fontblur" v-lazy="img">
            <img class="artist-img" v-lazy="img">
            <svg class="svgtilt" width="100%" height="100%">
                <rect x="5%" y="5%" width="90%" height="90%" />
            </svg>
          </div>  
      </div>
    </div>
    <cdm-minishop :class="shop"/>
    <div class="full-width">
        <div class="container border black">
            <nuxt-link to="/artistes/"><p>Voir les autres tatoueurs.</p></nuxt-link>
        </div>
    </div>   
    <div class="lightbox">
        <div class="overlay"></div>
        <div class="prev-img"><i class="fas fa-chevron-left"></i></div>
        <div class="next-img"><i class="fas fa-chevron-right"></i></div>
        <div class="close-img"><i class="fas fa-times"></i></div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import VueMarkdown from 'vue-markdown'
import VueLazyload from 'vue-lazyload'
import cdmMinishop from '~/components/mini-shop.vue'
export default {
  layout: 'artistes',
  components: { VueMarkdown, VueLazyload, cdmMinishop },
  async asyncData({ params }) {
    let page = await import('~/content/tattoos/page/' + params.slug + '.json');
    return page;
  },
  head() {
    return {
      title: `${this.title}`,
      meta: [
        { hid: 'description', name: 'description', content: `${this.description}` },
        { 'property': 'og:title', 'content': `${this.title}`, 'vmid': 'og:title' },
        { 'property': 'og:description', 'content': `${this.description}` },
        { 'property': 'og:image', 'content': `${this.couverture}`, 'vmid': 'og:image' }
      ]
    }
  },
  mounted() {
  
    $('.portfolio .works:first-child').addClass('first');
    $('.portfolio .works:last-child').addClass('last'); 
    
    $('.works').on('click', function(){
        var selectfont = $(this).find('img').attr('data-src');
        var div = '<img class="fontimage" src="'+ selectfont +'" />';
        $('.works').removeClass("selected")
        $(this).addClass("selected");
        $(".fontimage").remove();
        $(".lightbox").prepend(div);
        $(".lightbox").toggleClass('active');
        $("#navbar").addClass('lightbox-active');
        end();
        return false;
    });
    $('.overlay, .close-img').on('click', function(){
        $(".lightbox").removeClass('active');
        $("#navbar").removeClass('lightbox-active');
    });
    $('.next-img').on('click', function(){
        var selectfont = $(".selected").next().find('img').attr('data-src');
        if (selectfont != null){
            var div = '<img class="fontimage right" src="'+ selectfont +'" />';
            $(".fontimage").addClass("left");
            $(".lightbox").prepend(div);
            $(".selected").removeClass("selected").next().addClass("selected");
            setTimeout( function(){
                $(".left").remove();
                $(".right").removeClass("right");
            }, 500);  
        }
        end();
    });
    $('.prev-img').on('click', function(){
        var selectfont = $(".selected").prev().find('img').attr('data-src');
        if (selectfont != null){
            var div = '<img class="fontimage left" src="'+ selectfont +'" />';
            $(".fontimage").addClass("right");
            $(".lightbox").prepend(div);
            $(".selected").removeClass("selected").prev().addClass("selected");
            setTimeout( function(){
                $(".right").remove();
                $(".left").removeClass("left");
            }, 500);  
        }
        end();
    });
    function end() {
        if($(".first").hasClass('selected')){
            $('.prev-img').addClass('end');
        }else{$('.prev-img').removeClass('end');}
        if($(".last").hasClass('selected')){
            $('.next-img').addClass('end');
        }else{$('.next-img').removeClass('end');}
    }
    
  }
};
</script>
<style>
  .intro {
      position: relative;
      width: 100%;
      height:auto;
      min-height: 80vh;
      margin-top: 58px;
  }
  .intro.artist-PIERO {
      min-height: 100vh;
  }
  .artist {
      padding: 0 !important;
  }
  .artist-cover {
      height: calc(100vh - 58px);
      width: auto;
      position: fixed;
      z-index: -1;
      top: 58px;
  }
  .intro.artist-PIERO .header{
      top: 50vh;
  }
  .artist .header {
      width: 40%;
      height: auto;
      position: relative;
      left: 55%;
      top: 40vh;
      -webkit-transform: translatey(-50%);
      transform: translatey(-50%);
      padding:30px 0;
  }
  .artist h2 {
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 2px;
      padding: 0 30px;
  }
  .artist p {
      color: #fff;
      font-size: 22px;
      line-height: 30px;
      padding: 0 30px;
      text-align:justify;
  }
  .artist a {
      color: #e6e6e6;
      text-decoration:none; 
  }
  .portfolio {
      position: relative;
      background: gray;
  }
  .works {
      width: 25%;
      display: inline-block;
      height: 25vw;
      overflow: hidden;
      margin-bottom: -5px;
      position: relative;
  }
  .center {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
  }
  .artist-img {
      position: relative;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      filter:blur(50px);
      -webkit-transition: 0.5s all ease;
      transition: 0.5s all ease;
      width:100%;
  }
  .artist-img[lazy=loaded]{
      filter:blur(0px) !important;
  }
  .fontblur{
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      filter:blur(50px);
      position: absolute;
      height:110%;
      width: auto;
  }
  .svgtilt {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
  }
  .svgtilt rect {
      fill: white;
      stroke: white;
      stroke-width: 0;
      fill-opacity: 0;
      stroke-opacity: 1;
      -webkit-transition: 0.4s all ease;
      transition: 0.4s all ease;
  }
  .center:hover .svgtilt rect {
      stroke-width: 5;
  }
  .lightbox {
      position: fixed;
      top: -100vh;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.9);
      padding: 100px;
      -webkit-transition: .4s all ease;
      transition: .4s all ease;
      z-index: 9;
  }
  .lightbox.active{
      top:0;
  }
  .fontimage {
      max-height: calc(100% - 58px);
      width:auto;
      position: absolute;
      bottom: 50px;
      left: 50%;
      -webkit-transform: translatex(-50%);
      transform: translatex(-50%);
      -webkit-transition: all .5s ease;
      transition: all .5s ease;
  }
  .fontimage.right{
      left: 150%;
  }
  .fontimage.left{
      left: -50%;
  }
  .overlay{
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width:100%;
      z-index:-1;
      cursor: zoom-out;
  }
  .close-img {
      position: absolute;
      bottom: 0;
      width: 100%;
      left: 0;
      height: 50px;
      color: #fff;
      text-align: center;
      line-height: 50px;
      font-size: 24px;
      cursor: pointer;
  }
  .prev-img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 75px;
      cursor: pointer;
  }
  .next-img {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 75px;
      cursor: pointer;
  }
  .next-img i, .prev-img i {
      position: relative;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%,-50%);
      transform: translate(-50%,-50%);
      color: #fff;
      font-size: 40px;
      -webkit-transition: all .5s ease;
      transition: all .5s ease;
  }
  .next-img.end i, .prev-img.end i{
      color: rgba(128, 128, 128, .5);
  }
  .full-width{
      width:100%;
      background:#fff;
      display: inline-block;
  }
  .full-width p {
      text-align: center;
  }
  .artist .shop-select {
      background: grey;
  }
  
  @media only screen and (min-width:960px) and (max-width:1264px){
    .artist-cover {
        height: calc(100vh - 58px);
        width: auto;
        position: fixed;
        z-index: -1;
        top: 58px;
        right: 0;
    }
    .artist .header {
        width: 60%;
        left: 40%;
    }
  }
  @media only screen and (min-width:600px) and (max-width:959px){
    .works {
        width: 50%;
        height: 50vw;
    }
    .artist .full-width {
        margin: -30px 0 0;
    }
    .artist .container {
        margin: 0;
    }
    .artist .header {
        width: 100%;
        left: 0;
        top: 30px !important;
        -webkit-transform: none;
        transform: none;
    }
    .artist .header h2, 
    .artist .header p {
        color: #fff;
        padding: 0 30px;
        text-shadow: 0 0 3px #000;
    }
  }
  @media only screen and (max-width:599px){
    .works {
        width: 100%;
        height: 100vw;
    }
    .artist .full-width {
        margin-bottom: 0;
        margin-top: -30px;
    }
    .artist .container {
        margin: 0;
    }
    .artist .header {
        width: 100%;
        left: 0;
        top: 30px !important;
        -webkit-transform: none;
        transform: none;
    }
    .artist-cover {
        height: 100vh;
        top: 0;
    }
    .artist .header h2, 
    .artist .header p {
        color: #fff;
        padding: 0 30px;
        text-shadow: 0 0 3px #000;
    }
    .intro {
        margin-top: 0;
        margin-bottom: 30px;
    }
    .lightbox {
        padding: 50px;
    }
    .fontimage {
        max-height: calc(100% - 100px);
    }
    .next-img, .prev-img {
        width: 50px;
    }
    .fontimage.right{
        left: 200vw;
    }
    .fontimage.left{
        left: -100vw;
    }
    
  }
</style>
