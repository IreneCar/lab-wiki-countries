// src/App.js
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList />} />
      </Routes>
    </div>
  );
}
export default App;
