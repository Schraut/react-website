import React from 'react';
import './App.css';

import Header from './components/header/header.component';
import Portfolio from './components/portfolio/portfolio.component';

class App extends React.Component {
  
  render() {
  return (
    <div className="App">
      <Header/>
      <h1>Portfolio</h1>
      <Portfolio/>
      <h1>Contact</h1>
    </div>
    
  );
  }
}

export default App;
