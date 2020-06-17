import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Portfolio extends React.Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>New Threads Clothing</Card.Title>
                        <Card.Text>
                        A web app built with React. <a href='https://new-threads-clothing.herokuapp.com/'>Click here to see it</a>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" />
            <Card.Body>
                <Card.Title>The Food App</Card.Title>
                <Card.Text>
                A web app built with Ruby on Rails. <a href='https://blooming-bastion-17680.herokuapp.com/#/'>Click here to see it</a>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </div>
        )
    }
}

export default Portfolio;