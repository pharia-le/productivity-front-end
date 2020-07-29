import React from 'react';
import { Link } from 'react-router-dom';

const LogCard = ({ log, habitName }) => {
    return (
        <div>
            <h3>{habitName}</h3>
            <h2>Date: {log.date}</h2>
            <h2>Done: {log.done ? "YES" : "NO"}</h2>
            <Link 
                to={`/habits/${log.habit_id}/logs/${log.id}/edit`}
                >Edit Log 
            </Link>
        </div>
    );
};

export default LogCard;