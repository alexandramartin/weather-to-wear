$(document).ready(function(){

	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?q=sanfrancisco,us&appid=de0167b3b4c301c0c2fbff5db7ab2156&units=imperial", 
		success: function(data) {
			console.log(data)
			// debugger;
			var temperature = data.main.temp;
			var description = data.weather[0].description
<<<<<<< HEAD
			// if (description == "mist") {
			// 	$("body").append.url("http://openweathermap.org/img/w/10d.png")
			// }
			$("body").append("<div id ='weather'>" + "Temperature is:" + temperature + "</div>"); 
			$("body").append("<div id='weather'>" + "It appears to be"  + description + "</div>");
=======
			//access the icon value inside of data
			//concat the img url string with the icon value data
			//append that to the weather-api div inside of and img tag with the img url string as the src of the image
			$("#weather-api").append("<div class='weather' style='color: whitesmoke'>" + "Temperature is:" + temperature + "</div>"); 
			$("#weather-api").append("<div class='weather' style='color: whitesmoke'>" + "It appears to be "  + description + "</div>");
>>>>>>> cc50ed7fe7c4f11be2ee0f925062ca5645dca407

		}
	})



})