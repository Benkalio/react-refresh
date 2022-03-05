import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/Layout/MainNavigation';

function App() {
  return (
    <div className="">
      <MainNavigation />
      <Routes>
        <Route path="/">
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Routes>  
    </div>
  );
}

export default App;
