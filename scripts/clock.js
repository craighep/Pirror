function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var words = ""
    if(h < 12){
        words = "Good morning!";
    }
    else if(h < 16){
        words = "Good afternoon!";
    }
    else{
        words = "Good evening!";
    }
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s + "<br>" + "<div id='words'>" + words + "</div>";
    

    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}