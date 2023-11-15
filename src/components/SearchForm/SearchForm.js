import { useLocation } from 'react-router-dom';
import FilterCheckbox from './../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import useFormWithValidation from '../../utils/Validation';
import { useEffect } from 'react';

export default function SearchForm({ searchMovies, setIsError, searchedMovie, savedMovie, isShort, setIsShort, filterMovies, allMovies, toggleShort }) {
  const { pathname } = useLocation();
  const { values, handleChange, resetForm } = useFormWithValidation();


  useEffect(() => {
    if ((pathname === '/saved-movies' && savedMovie.length === 0)) {
      resetForm({ search: '' })
    } else {
      resetForm({ search: searchedMovie })
    }
    setIsError(false)
  }, [searchedMovie, resetForm, setIsError, pathname, savedMovie])


  function handleSearchChange(evt) {
    handleChange(evt)
    setIsError(false)
  }

  function handleSubmitSearch(evt) {
    evt.preventDefault()
    if (evt.target.search.value) {
      searchMovies(evt.target.search.value)
      setIsError(false)
    } else {
      setIsError(true)
    }
  }

  return (
    <div className='search-form'>
      <form className='search-form__form' noValidate onSubmit={handleSubmitSearch}>
        <fieldset className='search-form__fieldset'>
          <input className='search-form__input' placeholder='Фильм' required type='text' name='search' value={values.search || ''} onChange={handleSearchChange} disabled={savedMovie ? savedMovie.length === 0 && true : false} />
          <button className={`search-form__button ${savedMovie ? (pathname === '/saved-movies' && savedMovie.length === 0) && 'search-form__button_disabled' : ''}`}></button>
        </fieldset >
        <FilterCheckbox toggleShort={toggleShort} isShort={isShort} />
      </form>
    </div>
  )
}