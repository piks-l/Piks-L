$(function () {
            // animation header page programme
            $( ".button-date button" ).click(function() {
              $( ".button-stage .any" ).click();
              $('.button-stage button, .other-stage button').each( function() {
                  $( this ).addClass( "active" );
                  $( ".button-date" ).removeClass( "mobile-active" );
              });
            });
            $( ".button-stage button, .other-stage button" ).click(function() {
              $('.button-stage button, .other-stage button').each( function() {
                  $( this ).removeClass( "active" );
                  $( ".stage" ).removeClass( "mobile-active" );
              });
            });

            // menu mobile date et stage
            $( ".select-date" ).click(function() {
              $( ".button-date" ).toggleClass( "mobile-active" );
              $( ".stage" ).removeClass( "mobile-active" );
            });
            $( ".select-stage" ).click(function() {
              $( ".stage" ).toggleClass( "mobile-active" );
              $( ".button-date" ).removeClass( "mobile-active" );
            });

            // menu page info pratiques
            $( ".select-infos button" ).click(function() {
              var info =   $( this ).attr('data-class');
              $('.select-fond').each( function() {
                  $( this ).removeClass( "active" );
              });
              $('.slide').each( function() {
                  $( this ).removeClass( "active" );
              });
              $( "." + info ).addClass( "active" );
              $('.select-infos button').each( function() {
                  $( this ).removeClass( "is-checked" );
              });
              $( this ).addClass( "is-checked" );
              $('.content-large').removeAttr( "id" ).attr('id', info);
            });


  console.log('Main.js ready!')
})
