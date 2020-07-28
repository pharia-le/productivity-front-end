import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const Habits = ({ habits }) => {
    const habitLinks = habits.length > 0 ?
    habits.map(h => (<p key={h.id}><Link to={`/habits/${h.id}`}>{h.attributes.name}</Link></p>)) :
    null
    return habitLinks;
};

export default connect(state => ({habits: state.habits}))(Habits);