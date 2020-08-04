import React from 'react';
import { connect } from 'react-redux';
import IsLoggedToday from '../logs/IsLoggedToday';
import NotLoggedToday from '../logs/NotLoggedToday';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'

const Habits = ({ habits, history }) => {
    
    let isDate = date => {
        const today = new Date()
        date = new Date(Date.parse(date))
        return (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear())
      }
    const habitLinks = habits.length > 0 ?
    habits.map(h => (
            <div key={h.id}>{(h.attributes.logs.find(l => isDate(l.created_at))) ? 
                <IsLoggedToday habit={h} history={history}/> 
                :    
                <NotLoggedToday habit={h} history={history}/>
                }
            </div>
        )
    ) 
    : null
    return (
        <>
            <Container className='header-container' fluid>
                <Card 
                    className='header-card'
                    bg='light'
                    text='danger'
                    >
                    <Card.Body>TODAY</Card.Body>
                </Card>
            </Container>
            <Container className='tinted-image' fluid>
                {habitLinks}
            </Container>
        </>
        )
};

export default connect(state => ({habits: state.habits}))(Habits);