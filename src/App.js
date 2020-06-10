import React from 'react';
import logo from './logo.svg';
import './App.css';


import  Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class App extends React.Component {
  
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Website under contruction.
        </h1>
      </header>
      <h1>Portfolio</h1>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>New Threads Clothing</Card.Title>
            <Card.Text>
              A web app built with React. <a href='https://new-threads-clothing.herokuapp.com/'>Click here to see it</a>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
    </div>
    
  );
  }
}

export default App;
