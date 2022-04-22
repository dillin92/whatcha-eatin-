import React, { useState } from "react";
import axios from "axios"; 
const apiKey = "AIzaSyAoZvL9zENAx7_uSggjaC57K4JKzBR_9DY";

export default class fetchData extends React.Component {

  state ={
    loading: true
  }
  
componentDidMount() {  return axios(`'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${keyword}&inputtype=textquery&key=${apiKey}'`)
.then((response) => console.log(response.data));
}

render() {
  return <div>
    {this.state.loading ? <div> loading... </div> : <div>Yum...</div>}
  </div>
}

};