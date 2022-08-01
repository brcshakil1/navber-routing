import React from 'react';
import {NavLink} from 'react-router-dom';

const About = () => {
    return (
        <div>
            
                <ul className='topNavBar'>
                    <li> <NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            
            <section>
                <h1>About Page</h1>
                <h2>Hi I am Bayazidur Rahman Chowdhry</h2>
                <p>I'm from Bangladesh. I want to be a programmer. InShaAllah I can do it. Because I have faith of Almighty Allah</p>
            </section>
        </div>
    );
};

export default About;