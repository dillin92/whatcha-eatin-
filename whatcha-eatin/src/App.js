import logo from './logo.svg';
import SearchBar from './components/searchBar/SearchBar';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
     <Nav/>
      <main>
       <Home>
         <SearchBar/>
       </Home>
      </main>
    </div>
    
  );
}

export default App;
