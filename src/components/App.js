import './App.css';

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './Main/Main';
import Movies from './Movies/Movies';
import SavedMovies from './SavedMovies/SavedMovies';
import Profile from './Profile/Profile';
import Login from './Login/Login';
import Register from './Register/Register';
import NotFound from './NotFound/NotFound';
import BurgerMenu from './BurgerMenu/BurgerMenu';


export default function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  function handleClickBurgerMenu() {
    setMenuActive(!menuActive);
  }

  return (
    <div className="page-content">
      {/* {loggedIn ? <Header /> : null} */}
      <Routes>
        <Route path="/" element={<Main burgerClick={handleClickBurgerMenu} />} />
        <Route path="/movies" element={<Movies burgerClick={handleClickBurgerMenu} />} />
        <Route path="/saved-movies" element={<SavedMovies burgerClick={handleClickBurgerMenu} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BurgerMenu isOpenBurger={menuActive} closeClick={handleClickBurgerMenu} />
    </div>
  );
}
