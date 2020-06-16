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
        <h1>
          Website under contruction.
        </h1>
        <h1>Eventually this site will look amazing!</h1>
        <h1>Built in react</h1>
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

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>The Food App</Card.Title>
            <Card.Text>
              A web app built with Ruby on Rails. <a href='https://blooming-bastion-17680.herokuapp.com/#/'>Click here to see it</a>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <h1>Contact</h1>
    </div>
    
  );
  }
}

export default App;
