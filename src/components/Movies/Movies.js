import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from './../Footer/Footer';
import './Movies.css';
import { useCallback, useEffect, useState } from 'react';
import moviesApi from '../../utils/MoviesApi';

export default function Movies({ burgerClick, loggedIn, moviesError, setError, savedMovies, setIsError, toggleMovie }) {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [searchedMovie, setSearchedMovie] = useState('');
  const [isShort, setIsShort] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [serverError, setServerError] = useState('');

  const filterMovies = useCallback((inputValue, isShort, movies) => {
    localStorage.setItem('movie', JSON.stringify(inputValue));
    localStorage.setItem('shorts', JSON.stringify(isShort));
    localStorage.setItem('allmovies', JSON.stringify(movies));
    setSearchedMovie(inputValue);
    setFilteredMovies(movies.filter((item) => {
      const movieName = item.nameRU.toLowerCase().includes(inputValue.toLowerCase())
      return isShort ? (movieName && item.duration <= 40) : movieName
    }))
  }, [])


  function searchMovies(inputValue) {
    if (allMovies.length === 0) {
      setIsSending(true)
      moviesApi.getMovies()
        .then((res) => {
          setAllMovies(res)
          setIsShort(false)
          setServerError(false)
          filterMovies(inputValue, isShort, res)
        })
        .catch(error => {
          setServerError(true)
          console.error(error)
        })
        .finally(() => setIsSending(false))
    } else { filterMovies(inputValue, isShort, allMovies) }
  }

  useEffect(() => {
    if (localStorage.allmovies && localStorage.shorts && localStorage.movie) {
      const movies = JSON.parse(localStorage.allmovies);
      const inputValue = JSON.parse(localStorage.movie);
      const isShort = JSON.parse(localStorage.shorts);
      setServerError(false)
      setSearchedMovie(inputValue)
      setIsShort(isShort)
      setAllMovies(movies)
      filterMovies(inputValue, isShort, movies)
    }
  }, [filterMovies])

  function changeShort() {
    if (isShort) {
      setIsShort(false)
      filterMovies(searchedMovie, false, allMovies)
      localStorage.setItem('shorts', JSON.stringify(false))
    } else {
      setIsShort(true)
      filterMovies(searchedMovie, true, allMovies)
      localStorage.setItem('shorts', JSON.stringify(true))
    }
  }

  return (
    <>
      <Header loggedIn={loggedIn} burgerClick={burgerClick} />
      <main>
        <section className='movies'>
          <SearchForm
            setError={setError}
            searchMovies={searchMovies}
            setIsError={setIsError}
            searchedMovie={searchedMovie}
            filterMovies={filterMovies}
            allMovies={allMovies}
            setIsShort={setIsShort}
            toggleShort={changeShort}
            isShort={isShort} />
          <MoviesCardList
            filteredMovies={filteredMovies}
            savedMovies={savedMovies}
            toggleMovie={toggleMovie}
            isSending={isSending}
            serverError={serverError} />
        </section>
      </main>
      <Footer />
    </>
  );
}