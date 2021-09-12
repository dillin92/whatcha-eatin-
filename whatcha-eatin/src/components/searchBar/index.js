import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiKey = "AIzaSyAoZvL9zENAx7_uSggjaC57K4JKzBR_9DY";

  
function getLocation() {
  console.log('yo, diggity');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
};

getLocation();

function showPosition(position) {

  let latlon= position.coords.latitude + "," + position.coords.longitude;

  let img_url = `"https://maps.googleapis.com/maps/api/staticmap?center=
  "+latlon+"&zoom=14&size=400x300&sensor=false&key=${apiKey}"`;

  document.getElementById("#mapholder").innerHTML = "<img src='"+img_url+"'>";

  console.log(latlon);
};






const SearchBar = () => {

//   const keyword = document.querySelector("#keyword");
//   // const latlon= showPosition();
//   const radius = document.querySelector("#radius");

// const [error, setError] = useState(null);
// const [data, setData] = useState(null);
// const [loading, setLoading] = useState(true);
// const [isLoaded, setIsLoaded] = useState(false);
// const [items, setItems] = useState([]);

//   function handleSubmit(e) {
//     e.prevent.default();
//     console.log('you clicked submit');
//   }

//   useEffect( () => {
//     axios(`'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${keyword}&inputtype=textquery&key=${apiKey}'`)
//   }).then(response => {
//     setData(response.data)
//   }).catch(error => {
//     console.error(
//       "error fetching data: ", error
//     );
//     setError(error);
//   }).
//   finally(() => {
//     setLoading(false);
//   })

 return(

<form id="search-form">
        <div>
          <label htmlFor="keyword">keyword</label>
          <input type="text" id="keyword" name="keyboard" />
        </div>
        <div> 
          <label htmlFor="radius">radius</label>
          <input type="text" id ="radius" name="radius" />
        </div>
        <button type="submit">Submit</button>

        <div id="mapholder"></div>
</form>
)
};

export default SearchBar;