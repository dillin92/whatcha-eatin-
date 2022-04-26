import React from 'react';
import { WhatchaEatin, LetsEat, Results, RemoveFromMyList, ImEatin } from './RandomizerElements';

const restaurants = ['85C Bakery Cafe',
  'A&W Restaurants',
  "Arby's",
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
  "Hardee's",
  "In-N-Out Burger",
  "Jack in the Box",
  "KFC",
  "Little Caesars",
  "Long John Silver's",
  "Marco's Pizza",
  "McDonald's",
  "Orange Julius",
  "Panda Express",
  "Papa Gino's",
  "Papa John's Pizza",
  "Pizza Hut",
  "Popeyes",
  "Quiznos",
  "Sonic Drive-In",
  "Starbucks",
  "Subway",
  "Taco Bell",
  "Wendy's",
  "Whataburger",
  "White Castle",
  "Wingstop",
  "WingStreet"
];
let randomRestaurants = restaurants[Math.floor(Math.random() * restaurants.length -1)];

const Randomizer = () =>{
  return(
 
    <form>
       <WhatchaEatin>Whatcha Eatin!</WhatchaEatin>
            <Results>{randomRestaurants}
              <section>
                <RemoveFromMyList>Delete</RemoveFromMyList>
                <ImEatin>ImEatinThis</ImEatin>
              </section>
            </Results>

            <LetsEat type="submit">Lets Eat!!!</LetsEat>           
    </form>
    )
};
 export default Randomizer;
