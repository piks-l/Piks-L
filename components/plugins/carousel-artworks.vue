<template>
  <div class="carousel-artworks">
    <div class="carousel__nav">
      <span data-hover id="moveLeft" class="carousel__arrow">
        <svg class="carousel__icon" width="24" height="24" viewBox="0 0 24 24">
          <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
        </svg>
      </span>
      <span data-hover id="moveRight" class="carousel__arrow" >
        <svg class="carousel__icon"  width="24" height="24" viewBox="0 0 24 24">
          <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
        </svg>    
      </span>
     </div>
     <h3>ARTWORKS</h3>
     <div v-for="art in arts.slice(0, 3)" :key="art.date" class="carousel-item">
      <div class="carousel-item__image" :style="{ backgroundImage: `url(${art.couverture})` }"></div>
      <div class="carousel-item__info">
        <div class="carousel-item__container">
          <h2 class="carousel-item__subtitle">{{ art.date }}</h2>
          <h1 class="carousel-item__title">{{ art.title }}</h1>
                <p class="carousel-item__description">{{ art.description }}</p>
          <nuxt-link data-hover :to="art._path" class="carousel-item__btn">En savoir plus</nuxt-link>
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
      $('.carousel-artworks .carousel-item').eq(0).addClass('active');
      var total = $('.carousel-artworks .carousel-item').length;
      var currentArtworks = 0;
      $('.carousel-artworks #moveRight').on('click', function(){
        var next=currentArtworks;
        currentArtworks= currentArtworks+1;
        setSlide(next, currentArtworks);
      });
      $('.carousel-artworks #moveLeft').on('click', function(){
        var prev=currenArtworks;
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
       $('.carousel-artworks .carousel-item').eq(prev).removeClass('active');
       $('.carousel-artworks .carousel-item').eq(slide).addClass('active');
          setTimeout(function(){},800);
          console.log('current '+currentArtworks);
          console.log('prev '+prev);
      }
    }
  };
</script>


