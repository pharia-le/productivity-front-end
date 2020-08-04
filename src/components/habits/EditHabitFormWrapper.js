import React from 'react';
import { connect } from 'react-redux';
import { updateHabit, deleteHabit } from '../../actions/habits';
import { setFormDataForEdit, resetHabitForm } from '../../actions/habitForm';
import HabitForm from './HabitForm';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

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
            <>
                <Container className='header-container' fluid>
                    <Card 
                        className='header-card'
                        bg='light'
                        text='danger'
                    >
                        <Card.Body>EDIT HABIT</Card.Body>
                    </Card>
                </Container>
                <Container className='tinted-image' fluid>
                <HabitForm editMode handleSubmit={this.handleSubmit} history={history} deleteHabit={() => deleteHabit(habitId,history)}/>
                </Container>
            </>
        )
    }
};

export default connect(null, { updateHabit, deleteHabit, setFormDataForEdit, resetHabitForm })(EditHabitFormWrapper)