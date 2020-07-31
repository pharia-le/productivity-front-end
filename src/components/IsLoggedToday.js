import React from 'react';
import { Link } from 'react-router-dom'

const IsLoggedToday = ({habit}) => {
    
    return (
        <div key={habit.id}>
            <span><Link to={`/habits/${habit.id}`}>{habit.attributes.name}</Link> -- DONE </span>
        </div>
    );
};

export default IsLoggedToday;