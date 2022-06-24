import React from 'react'
import './App.css';
import Featured from './components/featured/Featured';
import Home from './components/home/Home';
import Navbar from './components/nav/Navbar';
import Support from './components/support/Support';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Support/>
      <Featured/>
    </div>
  );
}

export default App;
