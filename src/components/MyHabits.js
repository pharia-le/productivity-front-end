import React from 'react';
import { connect } from 'react-redux';
import HabitCard from './HabitCard'

const MyHabits = ({ habits }) => {
    const habitCards = habits.map(h => <HabitCard habit={h} key={h.id} />)
    return (
        <div>
            {habitCards}
        </div>
    );
};

export default connect(state => ({habits: state.myHabits}))(MyHabits);