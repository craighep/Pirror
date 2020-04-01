var tries = 0;
function getWeather(){
  $.simpleWeather({
    locationLat: '52.4340580',
	locationLon: '-1.8014060',
    woeid: 'efd2e1947ef7d5f5c7f5e0df318594b6',
    unit: 'c',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;c</h2>';
      html += '<ul><li>'+weather.city+'</li>';
      html += '<li class="currently">'+weather.description+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+'Mph</li></ul>';
	  html += '<li><img src="'+weather.image+'"/></li>'
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
