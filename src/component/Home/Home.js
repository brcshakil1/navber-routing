import React from 'react';
import {NavLink} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            
                <ul className='topNavBar'>
                    <li> <NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                    <li className='service'><NavLink to='/service'>Service</NavLink></li>
                </ul>           
           
            <section>
                <h1>Home Page</h1>
            </section>
        </div>
    );
};

export default Home;