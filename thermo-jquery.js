
$(document).ready(function() {

  $('#uptemp').click(function( clickEvent ) {
    if ( thermostat.temperature === thermostat.MaxTemp) {
      alert('You cannot go beyond 25 degrees (32 if in PSM).')
    }
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

  $('#reset').click(function( clickEvent ) {
    thermostat.temperature = thermostat.DEFAULT_TEMP;  
    $('#temperature').text(thermostat.temperature);
  });

  $( "section" ).addClass("test");

  $(' #temperature' ).text(thermostat.temperature);

});
