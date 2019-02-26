<template>
  <div class="carousel-tattoos">
    <div class="carousel__nav">
     <span id="moveLeft" class="carousel__arrow">
        <svg class="carousel__icon" width="24" height="24" viewBox="0 0 24 24">
          <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
        </svg>
      </span>
      <span id="moveRight" class="carousel__arrow" >
        <svg class="carousel__icon"  width="24" height="24" viewBox="0 0 24 24">
          <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
        </svg>    
      </span>
    </div>
   <div v-for="post in posts.slice().reverse().slice(0, 3)" :key="post.date" class="carousel-item carousel-item--1">
      <div class="carousel-item__info">
        <div class="carousel-item__container">
          <h2 class="carousel-item__subtitle">{{ post.date }}</h2>
          <h1 class="carousel-item__title">{{ post.title }}</h1>
          <p class="carousel-item__description">{{ post.description }}</p>
          <nuxt-link :to="post._path" class="carousel-item__btn">En savoir plus</nuxt-link>
        </div>
      </div>
      <div class="carousel-item__image" :style="{ backgroundImage: `url(${post.couverture})` }"></div>
    </div>

  </div>
</template>
<script>
  export default {
    data() {
      const context = require.context('~/content/tattoos/page/', false, /\.json$/);
      const posts = context.keys().map(key => ({
        ...context(key),
        _path: `/tattoos/${key.replace('.json', '').replace('./', '')}`
      }));
      return { posts };
    },
    mounted: function () {
      $('.carousel-tattoos .carousel-item').eq(0).addClass('active');
      var total = $('.carousel-tattoos .carousel-item').length;
      var current = 0;
      $('.carousel-tattoos #moveRight').on('click', function(){
        var next=current;
        current= current+1;
        setSlide(next, current);
      });
      $('.carousel-tattoos #moveLeft').on('click', function(){
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
       $('.carousel-tattoos .carousel-item').eq(prev).removeClass('active');
       $('.carousel-tattoos .carousel-item').eq(slide).addClass('active');
        setTimeout(function(){},800);
        console.log('current '+current);
        console.log('prev '+prev);
      }
    }
  };
</script>


