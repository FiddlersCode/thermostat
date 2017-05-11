
$(document).ready(function() {

  $('#uptemp').click(function( clickEvent ) {
    thermostat.UpTemp();
    $(' #temperature' ).text(thermostat.temperature);
  });

  $('#downtemp').click(function( clickEvent ) {
    if ( thermostat.temperature === thermostat.MinTemp) {
      alert('You cannot go below 10 degrees.')
    }
    thermostat.DownTemp();
    $('#temperature').text(thermostat.temperature);


  });

  $( "section" ).addClass("test");

  $(' #temperature' ).text(thermostat.temperature);

});
