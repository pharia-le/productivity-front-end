import React from 'react';
import { connect } from 'react-redux';
import IsLoggedToday from './IsLoggedToday'
import NotLoggedToday from './NotLoggedToday'

const Habits = ({ habits }) => {
    
    let isDate = date => {
        const today = new Date()
        date = new Date(Date.parse(date))
        return (date.getDate() === date.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear())
      }
    const habitLinks = habits.length > 0 ?
    habits.map(h => (
            <div key={h.id}>{(h.attributes.logs.find(l => isDate(l.created_at))) ? 
                <IsLoggedToday habit={h} /> 
                :    
                <NotLoggedToday habit={h} />
                }
            </div>
        )
    ) 
    : null
    return (
        <>
            <h3>TODAY</h3>
            <h5>{}</h5>
            {habitLinks}
        </>
        )
};

export default connect(state => ({habits: state.habits}))(Habits);