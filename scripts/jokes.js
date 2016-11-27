function getJoke(){
	$.getJSON( "https://api.chucknorris.io/jokes/random", function( data ) {
		$("#jokes").html(data['value']);
	});
	var t = setTimeout(startTime, 1000*60*60);
}