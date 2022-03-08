import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout className="">
      <Routes>
        <Route path="/" exact component={AllMeetupsPage} />
        <Route path="/new-meetup" component={NewMeetupPage} />
        <Route path="/favorites" component={FavoritesPage} />
      </Routes>  
    </Layout>
  );
}

export default App;
