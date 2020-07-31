import React from 'react';
import { Link } from 'react-router-dom'
import Calendar from './Calendar'

const HabitCard = ({ habit }) => {

    const habitCreatedDate = new Date(Date.parse(habit.attributes.created_at))
    const calendarStartDate = new Date(habitCreatedDate.getFullYear(), habitCreatedDate.getMonth()-1, 1)

    return (
        <div>
            {habit ?
            <div>
                <h3>{habit.attributes.name}</h3>
                <Link 
                    to={`/habits/${habit.id}/edit`}
                    >Edit Habit 
                </Link>
            </div>
            : null}
                    
            <Calendar logs={habit.attributes.logs} calendarStartDate={calendarStartDate}/>
            
            <h3>Data</h3>
            <h4>Number of Logs: {habit.attributes.logs.length}</h4>
        </div>
    );
};

export default HabitCard;