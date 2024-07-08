// U78784426
// src/App.js
import React from 'react';
import FancyText from './FancyText';
import TaskGenerator from './TaskGenerator';
import './App.css'; // Optionally create a CSS file for global styles

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <FancyText title text="Task Motivation App" />
      </header>
      <main>
        <TaskGenerator />
      </main>
      <footer>
        <p>&copy; 2024 Your Name All Rights Reserved</p>
      </footer>
    </div>);};

export default App;