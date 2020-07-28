import React from 'react';
import { connect } from 'react-redux'
import { updateHabit, deleteHabit } from '../actions/habits'
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
        const { deleteHabit, habit, history } = this.props
        const habitId = habit ? habit.id : null
        return (
            <div>
                <HabitForm editMode handleSubmit={this.handleSubmit} />
                <br/>
                <button style={{color: "red"}} onClick={()=>deleteHabit(habitId, history)}>Delete this Habit</button>
            </div>
        )
    }
};

export default connect(null, { updateHabit, deleteHabit, setFormDataForEdit, resetHabitForm })(EditHabitFormWrapper)