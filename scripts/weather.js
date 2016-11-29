var tries = 0;
function getWeather(){
  $.simpleWeather({
    location: '52.4340580,-1.8014060',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
  
      $( "#weather" ).html(html);
      $( "#weather" ).fadeIn( "slow", function() {
      });
    },
    error: function(error) {      
      tries++;
      if(tries > 3){
        // nothing
        return;
      }
      var t = setTimeout(getWeather, 1000*5);
    }
  });
}
