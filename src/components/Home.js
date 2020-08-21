import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='centered'>
            <h1>MOMENTUM</h1>
            <br></br>
            <img src={require('../heart.png')} alt="heart icon" height='370' width='370'/>
            <br></br>
            <br></br>
            <h4><Link to='/signup' >sign up</Link> / <Link to='/login' >log in</Link></h4>
        </div>
    );
};

export default Home;