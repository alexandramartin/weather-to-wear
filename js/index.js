$(document).ready(function(){

	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?q=sanfrancisco,us&appid=de0167b3b4c301c0c2fbff5db7ab2156&units=imperial", 
		success: function(data) {
			console.log(data)
			// debugger;
			var temperature = data.main.temp;
			var description = data.weather[0].description
			$("body").append("<div id ='weather'>" + "Temperature is:" + temperature + "</div>"); 
			$("body").append("<div id='weather'>" + "It appears to be"  + description + "</div>");

			   // obj = JSON.parse(json); alert(obj.count);
			// append(this)index.html();
			//target the div with the id of weather, .append an html string interoplated with the temperature and description.

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
// function gettingJSON(){
//         document.write("jquery loaded");
//         $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=SanFrancisco&APPID=de0167b3b4c301c0c2fbff5db7ab2156",function(json){
//             document.write(JSON.stringify(json));
// <button id = "getIt" onclick = "gettingJSON()">Get JSON</button>

//         });
// $(document).ready(function() {
//   $.simpleWeather({
//     location: 'Oakland, CA',
//     woeid: '',
//     unit: 'f',
//     success: function(weather) {
//       html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
  
//       $("#weather").html(html);
//     },
//     error: function(error) {
//       $("#weather").html('<p>'+error+'</p>');
//     }
//   });
// });

//as soon as page loads (which means it needs be under $document.ready)
// make an ajax call to the api weather url with the api key
// on success of the ajax call
// part 1:console.log the data you recieve
// part 2: append data to html
//nest the info bc its in an object and append it show up on the screen(\\\\\\\\\\
//index.html

