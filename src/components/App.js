import './App.css';

import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';

import Main from './Main/Main';
import Movies from './Movies/Movies';
import SavedMovies from './SavedMovies/SavedMovies';
import Profile from './Profile/Profile';
import Login from './Login/Login';
import Register from './Register/Register';
import NotFound from './NotFound/NotFound';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import mainApi from '../utils/MainApi';
import CurrentUserContext from '../contexts/CurrentUserContext';
import ErrorContext from '../contexts/ErrorContext';
import errorMessage from '../utils/ErrorMessages';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import Preloader from './Preloader/Preloader';


export default function App() {
  const [currentUser, setCurrentUser] = useState({});

  const [loggedIn, setLoggedIn] = useState(false);
  const [isCheckToken, setIsCheckToken] = useState(true);
  const [menuActive, setMenuActive] = useState(false);

  const [savedMovies, setSavedMovies] = useState([])

  const [authError, setAuthError] = useState('');
  const [isError, setIsError] = useState(false)
  const [isSending, setIsSending] = useState(false);

  const navigate = useNavigate();

  function handleClickBurgerMenu() {
    setMenuActive(!menuActive);
  }

  function getData() {
    const token = localStorage.getItem('token');
    if (token) {
      Promise.all([mainApi.getUserData(token), mainApi.getMovies(token)])
        .then(([userData, dataMovies]) => {
          setLoggedIn(true);
          setCurrentUser(userData);
          setIsCheckToken(false);
          setSavedMovies(dataMovies.reverse())
        }).catch((error => { console.error(`Ошибка при проверке токена ${error}`); localStorage.clear(); setIsCheckToken(false); }))
    }
    else {
      setLoggedIn(false);
      setIsCheckToken(false);
      localStorage.clear()
    }
  }

  useEffect(() => {
    getData();
  }, [loggedIn])

  function handleRegister({ username, password, email }) {
    setIsSending(true);
    mainApi
      .registration({ username, password, email })
      .then((res) => {
        mainApi
          .authorization({ password, email })
          .then((res) => {
            localStorage.setItem("token", res.token);
            setLoggedIn(true);
            navigate("/movies");
          })
      })
      .catch((error) => {
        setAuthError(errorMessage(error, 'При регистрации пользователя произошла ошибка'))
        console.error(error);
      }).finally(() => {
        setIsSending(false);
        setTimeout(() => { setAuthError(''); }, 2500);
      })
  }

  function handleLogin({ email, password }) {
    setIsSending(true);
    mainApi
      .authorization({ email, password })
      .then((res) => {
        localStorage.setItem("token", res.token);
        setLoggedIn(true);
        navigate("/movies");
        getData();
      })
      .catch((error) => {
        setAuthError(errorMessage(error, 'Ошибка при авторизации'))
        console.error(error);
      }).finally(() => {
        setIsSending(false);
        setTimeout(() => { setAuthError(''); }, 2500);
      })
  }

  function toggleMovie(data) {
    const isAdd = savedMovies.some(element => data.id === element.movieId)

    const searchClickMovie = savedMovies.filter((item) => {
      return item.movieId === data.id
    })
    if (isAdd) {
      deleteMovie(searchClickMovie[0]._id)
    } else {
      mainApi.addMovie(data, localStorage.token)
        .then(res => {
          setSavedMovies([res, ...savedMovies])
        })
        .catch((error) => console.error(error))
    }
  }

  function deleteMovie(movieId) {
    mainApi.deleteMovie(movieId, localStorage.token)
      .then(() => {
        setSavedMovies(savedMovies.filter(movie => { return movie._id !== movieId }))
      })
      .catch((error) => console.error(error))
  }


  function handleEditProfile({ name, email }, token) {
    mainApi.editUserProfile({ name, email }, token)
      .then((res) => {
        setCurrentUser(res);
        setAuthError('Профиль успешно отредактирован')
      }).catch((error) => {
        console.error(error);
        setAuthError(errorMessage(error, 'Ошибка при редактировании профиля'))
      }).finally(() => {
        setTimeout(() => { setAuthError('') }, 3000);
      })
  }

  function handleLogout() {
    navigate('/');
    setLoggedIn(false);
    setCurrentUser({});
    localStorage.removeItem('token');
  }

  return (
    <div className="page-content">
      {isCheckToken ? <Preloader /> :
        <CurrentUserContext.Provider value={currentUser}>
          <ErrorContext.Provider value={isError}>
            <Routes>
              <Route path="/"
                element={<Main
                  loggedIn={loggedIn}
                  burgerClick={handleClickBurgerMenu} />
                } />
              <Route path="/movies"
                element={<ProtectedRoute
                  element={Movies}
                  getData={getData}
                  loggedIn={loggedIn}
                  burgerClick={handleClickBurgerMenu}
                  moviesError={authError}
                  savedMovies={savedMovies}
                  setError={setAuthError}
                  setIsError={setIsError}
                  toggleMovie={toggleMovie} />} />
              <Route path="/saved-movies"
                element={<ProtectedRoute
                  element={SavedMovies}
                  onDelete={deleteMovie}
                  getData={getData}
                  loggedIn={loggedIn}
                  burgerClick={handleClickBurgerMenu}
                  moviesError={authError}
                  savedMovies={savedMovies}
                  setError={setAuthError}
                  setIsError={setIsError} />} />
              <Route path="/profile"
                element={<ProtectedRoute
                  element={Profile}
                  getData={getData}
                  loggedIn={loggedIn}
                  burgerClick={handleClickBurgerMenu}
                  setUser={setCurrentUser}
                  editError={authError}
                  onLogout={handleLogout}
                  onEdit={handleEditProfile} />} />
              <Route path="/signin"
                element={loggedIn ? <Navigate to='/movies' replace /> : <Login
                  onLogin={handleLogin}
                  authError={authError}
                  isSending={isSending} />} />
              <Route path="/signup"
                element={loggedIn ? <Navigate to='/movies' replace /> : <Register
                  onRegister={handleRegister}
                  authError={authError}
                  isSending={isSending} />} />
              <Route path="*"
                element={<NotFound />} />
            </Routes>
            <BurgerMenu isOpenBurger={menuActive} closeClick={handleClickBurgerMenu} />
          </ErrorContext.Provider>
        </CurrentUserContext.Provider>
      }
    </div >
  );
}
