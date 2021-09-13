import React from 'react';
const apiKey = "AIzaSyAoZvL9zENAx7_uSggjaC57K4JKzBR_9DY";
const keyword = document.querySelector('#keyword');

export default class fetchData extends React.Component {

    

  state ={
    loading: true
  }
  
componentDidMount() {
  const url=`'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${keyword}&inputtype=textquery&key=${apiKey}'`
  const response = fetch(url);
  const data = response.json();
  console.log(data.results);
}

render() {
  return (<div>
    {this.state.loading ? <div> loading... </div> : <div>Yum...</div>}
  </div>
  )}

};