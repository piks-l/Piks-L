<template>
    <h2 class="ea-titre">{{this.$route.name}}</h2>
</template>
<style>
.ea-titre {
  line-height: 60px;
  position: relative;
  font-size: 4em;
  text-transform: uppercase;
  color: white;
  text-shadow: 0px 0px 30px rgba(0,0,0,.5);
  font-family: Archivo-Medium;
  font-weight: 900;
}
.page-enter-active .ea-titre, 
.page-leave-active .ea-titre{
  transition: all .50s ease-out;
}
.page-enter .ea-titre, 
.page-leave-active .ea-titre{
    opacity: 0;
    margin-top: 50px;
  } 
</style>
