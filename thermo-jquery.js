
$(document).ready(function() {

  $('#uptemp').click(function( clickEvent ) {
    if ( thermostat.temperature === thermostat.MaxTemp) {
      alert('You cannot go beyond 25 degrees (32 if in PSM).')
    }
    thermostat.UpTemp();
    UpdateDisplay();
  });

  $('#downtemp').click(function( clickEvent ) {
    if ( thermostat.temperature === thermostat.MinTemp) {
      alert('You cannot go below 10 degrees.')
    }
    thermostat.DownTemp();
    UpdateDisplay();
  });

  $('#reset').click(function( clickEvent ) {
    thermostat.temperature = thermostat.DEFAULT_TEMP;
      UpdateDisplay();
  });

  $('#powersavingon').click(function( clickEvent ) {
    thermostat.PowerSavingOn();
    $('#power-saving-status').text(thermostat.PowerSaving);
  });

  $('#powersavingoff').click(function( clickEvent ) {
    thermostat.PowerSavingOff();
    $('#power-saving-status').text(thermostat.PowerSaving);
  });

  function UpdateDisplay(){
    $('#temperature').text(thermostat.temperature);
    $('#energy-usage').attr('class', thermostat.Usage());
    $('#energy-usage').text(thermostat.Usage());
    };

  $('#energy-usage').attr('class', thermostat.Usage());
  $('#energy-usage').text(thermostat.Usage());

  $( "section" ).addClass("test");

  $('#temperature' ).text(thermostat.temperature);

  $('#power-saving-status').text(thermostat.PowerSaving);

});
