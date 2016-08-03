$(document).ready(function(){

	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?q=sanfrancisco,us&appid=de0167b3b4c301c0c2fbff5db7ab2156&units=imperial", 
		success: function(data) {
			console.log(data)
			// debugger;
			var temperature = data.main.temp;
			var description = data.weather[0].description
			// if (description == "mist") {
			// 	$("body").append.url("http://openweathermap.org/img/w/10d.png")
			// }
			$("body").append("<div id ='weather'>" + "Temperature is:" + temperature + "</div>"); 
			$("body").append("<div id='weather'>" + "It appears to be"  + description + "</div>");

		}
	})

	var myIndex = 0;
	carousel();

	function carousel() {
	    var i;
	    var x = document.getElementsByClassName("mySlides");
	    for (i = 0; i < x.length; i++) {
	       x[i].style.display = "none";
	    }
	    myIndex++;
	    if (myIndex > x.length) {myIndex = 1}
	    x[myIndex-1].style.display = "block";
	    setTimeout(carousel, 2000); // Change image every 2 seconds
	}



})