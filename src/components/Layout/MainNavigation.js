import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../../store/favorites-context';
import classes from './MainNav.module.css';

function MainNavigation() {
    const favoriteCtx = useContext(FavoritesContext)

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
                        <Link to='/favorites'>
                            Fave Meetups
                            <span className={classes.badge}>
                                {favoriteCtx.totalFavorites}
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
