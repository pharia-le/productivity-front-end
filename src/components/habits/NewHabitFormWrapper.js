import React from 'react';
import { connect } from 'react-redux';
import { createHabit } from '../../actions/habits';
import HabitForm from './HabitForm';

const NewHabitFormWrapper = ({ history, createHabit }) => {
    const handleSubmit = (formData) => {
        createHabit(formData, history)
    }

    return <HabitForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { createHabit })(NewHabitFormWrapper)