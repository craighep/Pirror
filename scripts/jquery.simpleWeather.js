/*! simpleWeather v3.1.0 - http://simpleweatherjs.com */
(function($) {
  'use strict';

  function getAltTemp(unit, temp) {
    if(unit === 'f') {
      return Math.round((5.0/9.0)*(temp-32.0));
    } else {
      return Math.round((9.0/5.0)*temp+32.0);
    }
  }

  $.extend({
    simpleWeather: function(options){
      options = $.extend({
        locationLat: '',
		locationLon: '',
        woeid: '',
        unit: 'f',
        success: function(weather){},
        error: function(message){}
      }, options);

      var now = new Date();
	  var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat='+options.locationLat+'&lon='+options.locationLon+'&appid='+options.woeid;

      $.getJSON(
        encodeURI(weatherUrl),
        function(data) {
          if(data !== null && data.weather !== null) {
            var result = data,
                weather = {},
                forecast,
                compass = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N'];
			
            weather.city = result.name;
            weather.temp = Math.round((result.main.temp-273.15)*10) / 10;
            weather.code = result.weather[0].icon;
            weather.description = result.weather[0].description;
            weather.wind = {direction: compass[Math.round(result.wind.deg / 22.5)], speed: result.wind.speed};

            weather.image = 'http://openweathermap.org/img/wn/' + weather.code + '@2x.png';

            options.success(weather);
          } else {
            options.error('There was a problem retrieving the latest weather information.');
          }
        }
      );
      return this;
    }
  });
})(jQuery);
