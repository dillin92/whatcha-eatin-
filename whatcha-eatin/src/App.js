import './App.css';
import Randomizer from './components/Randomizer';
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
        <Randomizer/>

    
 
     
      </main>
    </div>
    
  );
}

export default App;
