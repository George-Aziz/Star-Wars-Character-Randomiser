import logo from './StarWarsLogo.svg';
import './App.css';
import StarWars from './StarWars'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StarWars/>
      </header>
    </div>
  );
}

export default App;
