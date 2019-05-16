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
  console.log('document ready!')
  // Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });
  // Filter button
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  $('#filters2').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  // Change is-checked class on buttons
  $('.button-date, .button-stage').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $( this ).addClass('is-checked');
      });
  });
})
