import React from "react";


const apiKey = "AIzaSyAoZvL9zENAx7_uSggjaC57K4JKzBR_9DY";

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  };

function showPosition(position) {
    let location = position.coords.latitude + "," + position.coords.longitude;
  
    let img_url = `"https://maps.googleapis.com/maps/api/staticmap?center=
    "+latlon+"&zoom=14&size=400x300&sensor=false&key=${apiKey}"`;
  
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
  };

const connectApi = () => {

   
    getLocation();
    showPosition();


    fetch(`'https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=' + ${keyword} + '&location=${location}' + '&radius= ${radius}' + &type=restaurant&key=${apiKey}'`)
  .then(response => response.json())
  .then(data => console.log(data));

};


const SearchBar = () => {

  return(
<section>
    <h1>Enter Your Search Here</h1>
    <input placeholder="keyword"/>
    <input placeholder="Distance-Radius"/>
    <button>Submit</button>
</section>
  )
};

export default SearchBar;