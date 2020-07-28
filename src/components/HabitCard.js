import React from 'react';
import { Link } from 'react-router-dom'

const HabitCard = ({ habit }) => {
    return (
        habit ?
        <div>
            <h3>{habit.attributes.name}</h3>
            <Link 
                to={`/habits/${habit.id}/edit`}
                >Edit Habit 
            </Link>
        </div>
        : null
    );
};

export default HabitCard;