import React from 'react';
import { WhatchaEatin, LetsEat, Results, RemoveFromMyList, ImEatin, RandomizerEl } from './RandomizerElements';

const restaurants = [{name: "85C Bakery Cafe"},
 {name:  'A&W Restaurants'},
  {name: "Arby's"},
  {name:"Big Boy Restaurants"},
  {name:"Blaze Pizza"},
  {name:"Boston Market"},
  {name:"Buffalo Wild Wings"},
  {name: "Burger King"},
  {name: "Carl's Jr"},
  {name: "Chipotle Mexican Grill"},
  {name:"Church's Chicken"},
  {name:"Cicis"},
  {name:"Cinnabon"},
  {name:"Culver's"},
  {name: "Dairy Queen"},
  {name:"Domino's Pizza"},
  {name:"Dunkin' Donuts"},
  {name:"Five Guys"},
  {name:"Hardee's"},
  {name:"In-N-Out Burger"},
  {name:"Jack in the Box"},
  {name: "KFC"},
  {name:"Little Caesars"},
  {name:"Long John Silver's"},
  {name:"Marco's Pizza"},
  {name:"McDonald's"},
  {name:"Orange Julius"},
  {name:"Panda Express"},
  {name:"Papa Gino's"},
  {name:"Papa John's Pizza"},
  {name:"Pizza Hut"},
  {name: 'Pizza King'},
  {name:"Popeyes"},
  {name:"Quiznos"},
  {name:"Sonic Drive-In"},
  {name:"Starbucks"},
  {name:"Subway"},
  {name:"Taco Bell"},
  {name:"Wendy's"},
  {name:"Whataburger"},
  {name:"White Castle"},
  {name:"Wingstop"},
  {name:"WingStreet"}
];

const randomRestaurants = restaurants[Math.floor(Math.random() * restaurants.length -1)];

const restaurant = randomRestaurants.name;



const Randomizer = () =>{
  return(
 
    <RandomizerEl>
       <WhatchaEatin>Whatcha Eatin!</WhatchaEatin>
            <Results>{restaurant}
              <section>
                <RemoveFromMyList>Delete</RemoveFromMyList>
                <ImEatin>ImEatinThis</ImEatin>
              </section>
            </Results>

            <LetsEat type="submit">Lets Eat!!!</LetsEat>           
    </RandomizerEl>
    )
};
 export default Randomizer;
