import React from 'react';
import { Outlet,link } from 'react-router-dom';


const Contact = () => (
    <div>
        <h2>Contact</h2>
        <nav>
            <ul>
                <li><Link to="email"> Email </Link></li>
                <li><Link to="phone"> Phone </Link></li>
                {/* <li><Link to="email"> Email </Link></li> */}
            </ul>
        </nav>
        <Outlet/>
    </div>
)

export default Contact;