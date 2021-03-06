<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/css/main.css">
<link rel="stylesheet" href="/css/weather.css">
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="/scripts/clock.js"></script>
<script type="text/javascript" src="/scripts/jquery.simpleWeather.js"></script>
<script type="text/javascript" src="/scripts/weather.js"></script>
<script type="text/javascript" src="/scripts/jokes.js"></script>
<script type="text/javascript" src="/scripts/news.js"></script>
</head>
<body>
<table class="tg">
  <tr>
    <td colspan="2"><div id="weather"></div></td>
    <td colspan="6"></td>
  </tr>
  <tr>
    <td colspan="2"></td>
    <td colspan="4">
    	<div id="clock"></div>
    </td>
    <td colspan="2"></td>
  </tr>
  <tr>
    <td colspan="8" id="jokes"></td>
  </tr>
  <tr>
    <td colspan="8" id="news"></td>
  </tr>
</table>
</body>
<script type="text/javascript">
	$( document ).ready(function() {
    	startTime();
    	getWeather();
    	//getJoke();
		getNews();
    	$( "#clock" ).fadeIn( "slow", function() {});
	});
</script>
</html>