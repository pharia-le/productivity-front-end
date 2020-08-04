import React from 'react';
import { connect } from 'react-redux';
import { updateHabitForm } from '../../actions/habitForm';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const HabitForm = ({ formData, updateHabitForm, handleSubmit, editMode, deleteHabit }) => {
    
    const handleChange = event => {
        const { name, value } = event.target
        updateHabitForm(name,value)
    }

    return (
        <Form className="habit-form"
                onSubmit={event => {
                event.preventDefault()
                handleSubmit(formData)
            }
        }>
            <Form.Group>
                <Form.Control 
                    size="lg"
                    type="text"
                    placeholder="Enter habit name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    value={formData.name} 
                />
            </Form.Group>
            <Button className="edit-buttons" variant="danger" type="submit">{editMode ? "Update" : "Create" }</Button>
            { editMode ? <Button className="edit-buttons" variant="secondary" onClick={deleteHabit}>Delete</Button> : null}
        </Form>
    );
};

export default connect(state => ({formData: state.habitForm}), { updateHabitForm })(HabitForm);