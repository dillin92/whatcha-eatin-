import React from 'react';
//const apiKey = "AIzaSyAoZvL9zENAx7_uSggjaC57K4JKzBR_9DY";
//const keyword = document.querySelector('#keyword');
//const positionStackApi = 'c2a1ef285d8ddc4bc62cbf11b35816dd';

const restaurants = ['85C Bakery Cafe',
  'A&W Restaurants',
  "Arby's",
  "Auntie Anne's",
  "Big Boy Restaurants",
  "Blaze Pizza",
  "Boston Market",
  "Buffalo Wild Wings",
  "Burger King",
  "Carl's Jr",
  "Chipotle Mexican Grill",
  "Church's Chicken",
  "Cicis",
  "Cinnabon",
  "Culver's",
  "Dairy Queen",
  "Domino's Pizza",
  "Dunkin' Donuts",
  "Five Guys",
  "Gatti's Pizza",
  "Godfather's Pizza",
  "Golden Chick",
  "Hardee's",
  "In-N-Out Burger",
  "Jack in the Box",
  "Jersey Mike's Subs",
  "Jet's Pizza",
  "Jollibee",
  "KFC",
  "Little Caesars",
  "Long John Silver's",
  "Louisiana Famous Fried Chicken",
  "Marco's Pizza",
  "McDonald's",
  "MOD Pizza",
  "Orange Julius",
  "Panda Express",
  "Papa Gino's",
  "Papa John's Pizza",
  "Peter Piper Pizza",
  "The Pizza Company",
  "Pizza Hut",
  "Pizza Inn",
  "Pollo Campero",
  "Pollo Tropical",
  "Popeyes",
  "Quiznos",
  "Sbarro",
  "Sonic Drive-In",
  "Starbucks",
  "Subway",
  "Sweet Frog",
  "Taco Bell",
  "TCBY",
  "Tim Hortons",
  "TKK Fried Chicken",
  "Wendy's",
  "Whataburger",
  "White Castle",
  "Wingstop",
  "WingStreet"
];
let randomRestaurants = restaurants[Math.floor(Math.random() * restaurants.length -1)];


const Randomizer = () =>{
 

  return(
 
    <form id="search-form" >
   
       <h1>Whatcha Eatin!</h1 >
            <button type="submit">GO!!!</button>
            <div>{randomRestaurants}</div>
    </form>
    )
}

// const SearchBar = () => {

//   const [formState, setFormState] = useState({ keyword: '' });

//   const [errorMessage] =  useState('');
//   let { keyword } = formState;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!errorMessage) {
//       console.log('Submit Form', formState);
//     }
//   };

//   const handleChange = (e) => {
//     if (!errorMessage) {
//       setFormState({ ...formState, [e.target.name]: e.target.value });
//       console.log('Handle Form', formState);
//     }
//   };

//   const componentDidMount = () => {
//     const url=`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${keyword}&inputtype=textquery&key=${apiKey}`;
//     const proxyUrl = "https://cors-anywhere.herokuapp.com/"
//     console.log("url", url);

    
//    fetch("https://api.positionstack.com/v1/forward?access_key=" + positionStackApi, {
//      method: 'GET',
//      mode: 'cors',
//      headers: {
//        "Content-Type": "application/json",
//        "Content-Type": "application/x-www-form-urlencoded",
//        "Accept": "application/json"
//      }
//    }).then(data => {
//     const response = data.json();
//     console.log("logging fetch response",response, data);
//     })
//     .then(res =>{
//       console.log(res);
//     })
//     .catch(err => {
//       console.log(err);
//     })  };

//   return(
 
//  <form id="search-form" defaultValue={keyword} onSubmit={handleSubmit}>

//     <h1>Search for Food Here!</h1 >

//          <div>
//            <label htmlFor="keyword">keyword:</label>
//            <input type="text" id="keyword" name="keyword" onBlur={handleChange} />
//          </div>
        
//          <button type="submit" onClick={componentDidMount}>Submit</button>
 
//          <div id="mapholder"></div>

//  </form>
//  )


//  };
 
 export default Randomizer;
  

// https://maps.googleapis.com/maps/api/place/findplacefromtext/json
//   ?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry
//   &input=Museum%20of%20Contemporary%20Art%20Australia
//   &inputtype=textquery
//   &key=AIzaSyAoZvL9zENAx7_uSggjaC57K4JKzBR_9DY