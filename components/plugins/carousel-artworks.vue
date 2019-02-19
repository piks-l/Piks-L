<template>
  <div class="carousel-artworks">
    <div class="carousel__nav">
      <span id="moveLeft-artworks" class="carousel__arrow">
        <svg class="carousel__icon" width="24" height="24" viewBox="0 0 24 24">
          <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
        </svg>
      </span>
      <span id="moveRight-artworks" class="carousel__arrow" >
        <svg class="carousel__icon"  width="24" height="24" viewBox="0 0 24 24">
          <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
        </svg>    
      </span>
     </div>
     <h3>ARTWORKS</h3>
     <div v-for="art in arts.slice().reverse().slice(0, 3)" :key="art.date" class="carousel-item-artworks">
      <div class="carousel-item__info">
        <div class="carousel-item__container">
          <h2 class="carousel-item__subtitle">{{ art.date }}</h2>
          <h1 class="carousel-item__title">{{ art.title }}</h1>
          <nuxt-link :to="art._path" class="carousel-item__btn">En savoir plus</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      const context = require.context('~/content/artworks/page/', false, /\.json$/);
      const arts = context.keys().map(key => ({
        ...context(key),
        _path: `/artworks/${key.replace('.json', '').replace('./', '')}`
      }));
      return { arts };
    },
    mounted: function () {
      $('.carousel-item-artworks').eq(0).addClass('active');
      var total = $('.carousel-item-artworks').length;
      var currentArtworks = 0;
      $('#moveRight-artworks').on('click', function(){
        var next=currentArtworks;
        currentArtworks= currentArtworks+1;
        setSlide(next, currentArtworks);
      });
      $('#moveLeft-artworks').on('click', function(){
        var prev=currenArtworkst;
        currentArtworks = currentArtworks- 1;
        setSlide(prev, currentArtworks);
      });
      function setSlide(prev, next){
        var slide= currentArtworks;
        if(next>total-1){
         slide=0;
          currentArtworks=0;
        }
        if(next<0){
          slide=total - 1;
          currentArtworks=total - 1;
        }
       $('.carousel-item-artworks').eq(prev).removeClass('active');
       $('.carousel-item-artworks').eq(slide).addClass('active');
        setTimeout(function(){},800);
        console.log('current '+currentArtworks);
        console.log('prev '+prev);
      }
    }
  };
</script>
<style>
.caroublog {
  height: 350px!important;
}
.carousel-artworks {
    width: 100%;
    height: 100%;
    display: flex;   
    overflow: hidden;
  position: relative;
}

.carousel-item-artworks {
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

.carousel-artworks .carousel-item__info {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  
    display: -webkit-flex;
  -webkit-justify-content: center;
  -webkit-flex-direction: column;
  
  order: 2;
  left: 0;
  margin: auto;
  padding: 0 40px;
  width: 40%;

}

.carousel-artworks .carousel-item__image {
    width: 60%;
    height: 100%;
    order: 1;
    align-self: flex-end;
    flex-basis: 60%;
  
      -webkit-order: 1;
    -webkit-align-self: flex-end;
    -webkit-flex-basis: 60%;
  
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
   position:relative;
  transform: translateX(-100%);
  transition: 0.6s all ease-in-out;
}

.carousel-item__subtitle {
    font-family: 'Open Sans', sans-serif;
    letter-spacing: 3px;
    font-size: 10px;
    text-transform: uppercase;
    margin: 0;
    color: #7E7E7E;    
    font-weight: 700;
    transform: translateY(25%);
    opacity: 0;
    visibility: hidden;
    transition: 0.4s all ease-in-out;
}

.carousel-item__title {
    margin: 15px 0 0 0;
    font-family: 'Playfair Display', serif;
    font-size: 44px;
    line-height: 45px;
    letter-spacing: 3px;
    font-weight: 700;
    color: #2C2C2C;
    transform: translateY(25%);
    opacity: 0;
    visibility: hidden;
    transition: 0.6s all ease-in-out;
}

.carousel-item__description {
    transform: translateY(25%);
    opacity: 0;
    visibility: hidden;
    transition: 0.6s all ease-in-out;
    margin-top: 35px;
    font-family: 'Open Sans', sans-serif;
    font-size: 13px;
    color: #7e7e7e;
    line-height: 22px;
    margin-bottom: 35px;
}


.carousel-item__container{

}

.carousel-item__btn {
    width: 35%;
    color: #2C2C2C;
    font-family: 'Open Sans', sans-serif;
    letter-spacing: 3px;
    font-size: 11px;
    text-transform: uppercase;
    margin: 0;
    width: 35%;
    font-weight: 700;
  text-decoration: none;
      transform: translateY(25%);
    opacity: 0;
    visibility: hidden;
    transition: 0.6s all ease-in-out;
}

.carousel__nav {
    position: absolute;
    right: 0;
    z-index: 2;
    background-color: #fff;
  bottom: 0;
}

.carousel__icon {
    display: inline-block;
    vertical-align: middle;
    width: 16px;
  fill: #5d5d5d;
}

.carousel__arrow {
    cursor: pointer;
    display: inline-block;
    padding: 11px 15px;
    position: relative;
}

.carousel__arrow:nth-child(1):after {
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

.active .carousel-item__subtitle, .active .carousel-item__title, .active .carousel-item__description,.active .carousel-item__btn{
    transform: translateY(0);
    opacity: 1;
  transition: 0.6s all ease-in-out;
    visibility: visible;
}



.active .carousel-item__image{ 
transition: 0.6s all ease-in-out;
transform: translateX(0);
}

</style>

