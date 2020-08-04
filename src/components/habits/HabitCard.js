import React from 'react';
import { Link } from 'react-router-dom';
import Calendar from '../logs/Calendar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const HabitCard = ({ habit }) => {

    const habitCreatedDate = date => new Date(Date.parse(date))
    const calendarStartDate = date => new Date(habitCreatedDate(date).getFullYear(), habitCreatedDate(date).getMonth()-1, 1)

    return (
        <div>
            {habit ?
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
                <Link 
                    to={`/habits/${habit.id}/edit`}
                    >Edit Habit 
                </Link>

                <Container className='tinted-image' fluid>
                    <Card id="calendar-card">
                        <Calendar logs={habit.attributes.logs} calendarStartDate={calendarStartDate(habit.attributes.created_at)}/>
                    </Card >
                </Container>

                <Container className='header-container' fluid>
                <Card
                    id='data-card' 
                    bg='dark'
                    text='light'
                    >
                    <Card.Body># OF LOGS: {habit.attributes.logs.length}</Card.Body>
                </Card>
                </Container>
            </>
            : null}
                    
        </div>
    );
};

export default HabitCard;