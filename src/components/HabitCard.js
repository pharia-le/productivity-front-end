import React from 'react';

const HabitCard = ({ habit }) => {
    return (
        <p>{habit.attributes.name}</p>
    );
};

export default HabitCard;