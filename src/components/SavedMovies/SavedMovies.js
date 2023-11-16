import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from './../Footer/Footer';
import './SavedMovies.css';
import { useCallback, useEffect, useState } from 'react';
import { shortMovieDuration } from '../../utils/constants';

export default function SavedMovies({ savedMovies, burgerClick, loggedIn, setIsError, onDelete }) {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies)
  const [searchedMovie, setSearchedMovie] = useState('');
  const [isShort, setIsShort] = useState(false)


  function searchMovies(inputValue) {
    filterMovies(inputValue, isShort, savedMovies)
  }

  const filterMovies = useCallback((searchedMovie, isShort, movies) => {
    setSearchedMovie(searchedMovie)
    setFilteredMovies(movies.filter((item) => {
      const searchName = item.nameRU.toLowerCase().includes(searchedMovie.toLowerCase())
      return isShort ? (searchName && item.duration <= shortMovieDuration) : searchName
    }))
  }, [])

  useEffect(() => {
    filterMovies(searchedMovie, isShort, savedMovies)
  }, [filterMovies, savedMovies, isShort, searchedMovie])

  function changeShort() {
    if (isShort) {
      setIsShort(false)
      filterMovies(searchedMovie, false, savedMovies)
    } else {
      setIsShort(true)
      filterMovies(searchedMovie, true, savedMovies)
    }
  }

  return (
    <>
      <Header
        loggedIn={loggedIn}
        burgerClick={burgerClick} />
      <main>
        <section className='saved-movies'>
          <SearchForm
            setIsError={setIsError} isShort={isShort} searchMovies={searchMovies} searchedMovie={searchedMovie} allMovies={savedMovies} savedMovie={savedMovies} filterMovies={filterMovies} setIsShort={setIsShort} toggleShort={changeShort} />
          <MoviesCardList filteredMovies={filteredMovies} onDelete={onDelete} />
        </section>
      </main>
      <Footer />
    </>
  );
}