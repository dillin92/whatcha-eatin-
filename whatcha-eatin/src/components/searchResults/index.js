import React, { useState } from "react";

const apiKey = "AIzaSyAoZvL9zENAx7_uSggjaC57K4JKzBR_9DY";

const SearchResults = () => {

    console.log("yo, diggity");
  
    const keyword = document.querySelector("#keyword");
    const latlon= showPosition();
    const radius = document.querySelector("#radius");
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch(`'https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=' + ${keyword} + '&location=${latlon}' + '&radius= ${radius}' + &type=restaurant&key=${apiKey}'`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} {item.price}
          </li>
        ))}
      </ul>
    );
  }
  }
  
  export default SearchBar;