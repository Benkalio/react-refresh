import { Link } from 'react-router-dom';

function MainNavigation() {
    return (
        <header>
            <div>Meet ups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meets ups link</Link>
                    </li>
                    <li>
                        <Link to='/new-meetups'>AddMeets ups link</Link>
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
