import React from 'react';
import {NavLink} from 'react-router-dom';

const contact = () => {
    return (
        <div>
           
               <ul className='topNavBar'>
                    <li> <NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
               </ul>
            
            <section>
                <h1>Contact Page</h1>
                <p>Email: brcshakil72@gmail.com</p>
                <p>Phone: 01739405244</p>
                <address>
                    Bayazidur Rahman Chowdury <br />
                    from: Bhangarhat, Rajnagar, Moulvibazar.  
                </address>
            </section>
        </div>
    );
};

export default contact;