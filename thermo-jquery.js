
$(document).ready(function() {

  $('#uptemp').click(function( clickEvent ) {
    thermostat.UpTemp();
    $(' #temperature' ).text(thermostat.temperature);
    alert( thermostat.temperature );

  });

  $('#downtemp').click(function( clickEvent ) {

    alert( 'Temp Down Clicked' );

  });

  $( "section" ).addClass("test");

  $(' #temperature' ).text(thermostat.temperature);

});
