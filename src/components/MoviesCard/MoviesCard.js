import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function MoviesCard({ onDelete, toggleMovie, data, savedMovies }) {
  const { pathname } = useLocation();
  const [addClick, setAddClick] = useState(false);

  useEffect(() => {
    if (pathname === '/movies')
      setAddClick(savedMovies.some(element => data.id === element.movieId))
  }, [savedMovies, data.id, setAddClick, pathname])

  function onClick() {
    if (savedMovies.some(element => data.id === element.movieId)) {
      setAddClick(true)
      toggleMovie(data)
    } else {
      setAddClick(false)
      toggleMovie(data)
    }
  }

  function convertTime(duration) {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);
    return (hours === 0 ? `${minutes}м` : minutes === 0 ? `${hours}ч` : `${hours}ч${minutes}м`)
  }


  return (
    <li className='movies-card'>
      <a href={data.trailerLink} target="_blank" rel='noreferrer'>
        <img className='movies-card__image' src={pathname === '/movies' ? `https://api.nomoreparties.co${data.image.url}` : data.image} alt={data.name} />
      </a>
      {pathname === '/movies' ?
        addClick ?
          <button type='button' className='movies-card__button_active' onClick={onClick}></button>
          :
          <button type='button' className='movies-card__button' onClick={onClick}>Сохранить</button>
        :
        <button type='button' className={`movies-card__button_type_delete`} onClick={() => onDelete(data._id)}></button>
      }
      <div className='movies-card__info'>
        <h2 className="movies-card__title">{data.nameRU}</h2>
        <p className="movies-card__duration">{convertTime(data.duration)}</p>
      </div>
    </li >
  )
}