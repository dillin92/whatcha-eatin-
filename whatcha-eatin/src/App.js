import './App.css';
import Randomizer from './components/Randomizer';
import Nav from './components/Nav';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className="App">
     <Nav/> 
    <Randomizer/>   
    <Footer/>
    </div>   
  );
}

export default App;
