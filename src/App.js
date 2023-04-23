import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>function Called</h1>
        <h2>hello hello hello</h2>
        <Profile />
      </header>
    </div>
  );
}

export default App;
