import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';

import FavoritesContext from '../store/favorites-context';

function FavoritesPage() {
    const favoriteCtx = useContext(FavoritesContext);

    let content;

    if (favoriteCtx.totalFavorites === 0) {
        content = <p>Your favorites is empty. Add new favorites</p>
    } else {
        content = <MeetupList meetups={favoriteCtx.favorites} />
    }

    return (
        <section>
            <h1>Favorites</h1>
            {/* <MeetupList meetups={favoriteCtx.favorites} /> */}
            {content}
        </section>
    )
}

export default FavoritesPage;
