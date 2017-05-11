
$(document).ready(function() {

  $('#uptemp').click(function( clickEvent ) {

    alert( 'Temp Up Clicked' );

  });

  $('#downtemp').click(function( clickEvent ) {

    alert( 'Temp Down Clicked' );

  });

  $( "section" ).addClass("test");

  $(' #temperature' ).text(thermostat.temperature);

});
