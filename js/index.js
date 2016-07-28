  // /*background-color: #4CAF50; /* Green */
  //   border: none;
  //   color: white;
  //   padding: 15px 35px;
  //   text-decoration: none;
  //   display: inline-block;
  //   font-size: 16px;
  //   margin-left: 20%;
  //   margin-bottom:1%;
  //   cursor: pointer;*/*/*/


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