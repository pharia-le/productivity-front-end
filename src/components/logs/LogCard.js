import React from 'react';
import { connect } from 'react-redux';
import { deleteLog } from '../../actions/habits';

const LogCard = ({ log, habit, history, deleteLog }) => {
    const dateToStr = (date) => {
        return new Date(Date.parse(date)).toDateString()
      }
    return (
        <div>
            { log ?
            <div>
                <h3>{habit.attributes.name}</h3>
                <h2>Date: {dateToStr(log.date)}</h2>
                <h2>Done: {log.done ? "YES" : "NO"}</h2>
                <button style={{color: "red"}} onClick={() => deleteLog(log.id, habit.id, history)}>Delete Log</button>
            </div>
            : null    
            }
        </div>
    );
};

export default connect(null, { deleteLog })(LogCard);