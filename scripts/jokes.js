function getJoke(){
	$.getJSON( "https://api.chucknorris.io/jokes/random", function( data ) {
		$( "#jokes" ).fadeOut( "slow", function() {
			$("#jokes").html(data['value']);
      	});
		$( "#jokes" ).fadeIn( "slow", function() {
     	});

	});
	var t = setTimeout(getJoke, 1000*600);
}