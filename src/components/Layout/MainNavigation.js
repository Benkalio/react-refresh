import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNav.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Meet ups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meets ups link</Link>
                    </li>
                    <li>
                        <Link to='/new-meetups'>Add New Meet up</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Fave Meets ups link</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
