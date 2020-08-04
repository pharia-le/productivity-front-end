import React from 'react';
import { connect } from 'react-redux';
import { createLog } from '../../actions/habits';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const NotLoggedToday = ({ habit, history, createLog }) => {
    
    const handleClick = event => {
        if (event.target.nodeName !== 'BUTTON') {
            history.push(`/habits/${habit.id}`)
        }
    }
    
    return (
        <Container>
            <Card 
                className='not-logged'
                key={habit.id}
                name={habit.id}
                bg='Light'
                text='danger'
                onClick={handleClick}
                >
                <Card.Body id='card-body'>
                    {habit.attributes.name.toUpperCase()}
                    <Button id="log-button" variant='danger' onClick={() => createLog(habit.id)}>LOG</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default connect(null, { createLog })(NotLoggedToday);