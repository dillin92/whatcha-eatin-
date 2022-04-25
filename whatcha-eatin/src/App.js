import './App.css';
import Randomizer from './components/Randomizer';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
     <Nav/>
      <main>
        <Randomizer/>   
      </main>
    </div>   
  );
}

export default App;
