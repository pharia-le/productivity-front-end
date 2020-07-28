import React from 'react';
import { connect } from 'react-redux'
import { updateHabit } from '../actions/habits'
import { setFormDataForEdit, resetHabitForm } from '../actions/habitForm'
import HabitForm from './HabitForm'

class EditHabitFormWrapper extends React.Component {

    componentDidMount() {
        this.props.habit && this.props.setFormDataForEdit(this.props.habit)
    }

    componentDidUpdate(prevProps) {
        this.props.habit && !prevProps.habit && this.props.setFormDataForEdit(this.props.habit)
    }
    
    componentWillUnmount() {
        this.props.resetHabitForm()
    }
    
    handleSubmit = (formData) => {
        const { updateHabit, habit, history } = this.props
        updateHabit({
            ...formData,
            habitId: habit.id
        }, history)
    }

    render() {
        return (
            <div>
                <HabitForm editMode handleSubmit={this.handleSubmit} />
            </div>
        )
    }
};

export default connect(null, { updateHabit, setFormDataForEdit, resetHabitForm })(EditHabitFormWrapper)