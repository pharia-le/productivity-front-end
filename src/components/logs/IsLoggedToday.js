import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const IsLoggedToday = ({ habit, history }) => {

    const handleClick = event => {
        if (event.target.nodeName !== 'BUTTON') {
            history.push(`/habits/${habit.id}`)
        }
    }

    return (
        <Container>
            <Card 
                className='is-logged'
                key={habit.id}
                name={habit.id}
                text='light'
                onClick={handleClick}
            >
                <Card.Body>{habit.attributes.name.toUpperCase()}</Card.Body>
            </Card>
        </Container>
    );
};

export default IsLoggedToday;