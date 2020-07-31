import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { createLog } from '../actions/habits'

const NotLoggedToday = ({ habit, createLog }) => {
    return (
        <div key={habit.id}>
            <span>
            <Link to={`/habits/${habit.id}`}>{habit.attributes.name}</Link>
                <button
                    onClick={() => createLog(habit.id)}
                    >LOG TODAY
                </button>
            </span>
        </div>
    );
};

export default connect(null, { createLog })(NotLoggedToday);