$(function () {
  // Menu
  $( ".open-menu" ).click(function() { $( ".menu" ).addClass( "open" ); });
  $( ".close" ).click(function() { $( ".menu" ).removeClass( "open" ); });
  if(document.getElementById("header") === null){}else{
      window.onscroll = function() {scrollfunction()};
      var header = document.getElementById("header");
      var logo = document.getElementById("logo");
      var sticky = header.offsetHeight;
      function scrollfunction() {
          if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            logo.classList.add("grab");
          } else {
            header.classList.remove("sticky");
            logo.classList.remove("grab");
          }
      }
  }
  console.log('Main.js ready!')
})
