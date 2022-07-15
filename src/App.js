// src/App.js
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Bootstrap container wrapper div */}
      <div class="container">
        {/* Bootstrap row wrapper div  */}
        <div class="row">
          <CountriesList />
        </div>
      </div>
    </div>
  );
}
export default App;
