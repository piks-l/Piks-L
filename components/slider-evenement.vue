<template>
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
   <div v-for="(img, i) in galerie" :key="img" class="carousel-item carousel-item--1">
      <div class="carousel-item__image" :style="{ backgroundImage: `url(${img})` }"></div>
    </div>
  </div>
</template>
<script>
  export default {
    props: [
      'galerie'
    ],
    mounted: function () {
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
    }
  };
</script>


