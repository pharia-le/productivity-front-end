import React from 'react';
import { connect } from 'react-redux';
import { deleteLog } from '../../actions/habits';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const LogCard = ({ log, habit, history, deleteLog }) => {

    return (
        <>
            { log ?
            <>
                <Container className='header-container' fluid>
                    <Card 
                        className='header-card'
                        bg='light'
                        text='danger'
                        >
                        <Card.Body>{habit.attributes.name.toUpperCase()}</Card.Body>
                    </Card>
                </Container>
                <Container className='tinted-image' fluid>
                    <Card id='log-card'>
                        <h4>Date of Log</h4>
                        <h5>{log.date}</h5>
                        <Button variant='secondary' onClick={() => deleteLog(log.id, habit.id, history)}>Delete</Button>
                    </Card>
                </Container>
            </>
            : null    
            }
        </>
    );
};

export default connect(null, { deleteLog })(LogCard);