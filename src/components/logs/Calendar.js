import React from 'react';
import { withRouter } from 'react-router-dom';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const Calendar = ({ logs, history }) => {
    
    const handleClick = event => {
        if (event) {
            const { habit_id, id } = event
            event ? history.push(`/habits/${habit_id}/logs/${id}`) : console.log('nope')
        }
    }

    const now = new Date();
    const endDate = new Date(now.getFullYear(), now.getMonth()+1, 7)
    const startDate = new Date(now.getFullYear(), 0., 1).toLocaleDateString()
    
    return (
        <CalendarHeatmap 
            values={logs} 
            onClick={handleClick}
            startDate={startDate}
            endDate={endDate}
            classForValue={(value) => {
                if (!value) {
                  return 'color-empty';
                }
                return `color-filled`;
              }}
        />
    );
};

export default withRouter(Calendar)