import React from 'react';
import { connect } from 'react-redux';
import { createHabit } from '../../actions/habits';
import HabitForm from './HabitForm';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const NewHabitFormWrapper = ({ history, createHabit }) => {
    const handleSubmit = (formData) => {
        createHabit(formData, history)
    }

    return (
        <>
            <Container className='header-container' fluid>
                <Card 
                    className='header-card'
                    bg='light'
                    text='danger'
                    >
                    <Card.Body>CREATE HABIT</Card.Body>
                </Card>
            </Container>
            <Container className='tinted-image' fluid>
                <HabitForm history={history} handleSubmit={handleSubmit} />
            </Container>
        </>
    )
};

export default connect(null, { createHabit })(NewHabitFormWrapper)