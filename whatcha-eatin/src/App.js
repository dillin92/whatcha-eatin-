import logo from './logo.svg';
import SearchBar from './components/searchBar';
import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
     <Nav/>
      <main>
        <Home></Home>
     
      </main>
    </div>
    
  );
}

export default App;
