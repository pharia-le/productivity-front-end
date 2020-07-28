import React from 'react';

const HabitCard = ({ habit }) => {
    return (
        habit ?
        <div>
            <h3>{habit.attributes.name}</h3>
        </div>
        : null
    );
};

export default HabitCard;