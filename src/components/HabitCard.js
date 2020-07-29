import React from 'react';
import { Link } from 'react-router-dom'
import Logs from './Logs'

const HabitCard = ({ habit }) => {
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
            <Logs logs={habit.attributes.logs} habitId={habit.id} />
        </div>
    );
};

export default HabitCard;