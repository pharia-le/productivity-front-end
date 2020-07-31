import React from 'react';
import { Link } from 'react-router-dom'
import Calendar from './Calendar'

const HabitCard = ({ habit }) => {

    const habitCreatedDate = date => new Date(Date.parse(date))
    const calendarStartDate = date => new Date(habitCreatedDate(date).getFullYear(), habitCreatedDate(date).getMonth()-1, 1)

    return (
        <div>
            {habit ?
            <div>
                <h3>{habit.attributes.name}</h3>
                <Link 
                    to={`/habits/${habit.id}/edit`}
                    >Edit Habit 
                </Link>
                <Calendar logs={habit.attributes.logs} calendarStartDate={calendarStartDate(habit.attributes.created_at)}/>
            
                <h3>Data</h3>
                <h4>Number of Logs: {habit.attributes.logs.length}</h4>
            </div>
            : null}
                    
        </div>
    );
};

export default HabitCard;