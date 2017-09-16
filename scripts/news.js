var i = 0;
function getNews(){
	$.getJSON( "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=d80eceb554404a1989f915094062e70c", function( data ) {
		$( "#news" ).fadeOut( "slow", function() {
			var articleNum = data.articles.length;
			if(articleNum==i){
				i = 0;
			}
			$("#news").html(data.articles[i].title+"<br><div id='news-sub'>"+data.articles[i].description+"</div>");
      	});
		$( "#news" ).fadeIn( "slow", function() {
     	});
	});
	i++;
	var t = setTimeout(getNews, 1000*7);
}