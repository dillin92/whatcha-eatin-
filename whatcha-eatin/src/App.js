import './App.css';
import SearchBar from './components/searchBar';
import Home from './pages/Home';
import Nav from './components/Nav';
// import Signup from './pages/Signup';
// import fetchData from './components/Fetch';

function App() {
  return (
    <div className="App">
     <Nav/>
      <main>
        <Home/>
        <SearchBar/>

    
 
     
      </main>
    </div>
    
  );
}

export default App;
