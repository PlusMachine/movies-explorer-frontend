import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';
import {
  MaxScreen,
  MediumScreen,
  SmallScreen,
  InitMoreMaxScreen,
  InitLessMaxScreen,
  InitMediumScreen,
  InitSmallScreen,
  StepMaxScreen,
  StepMediumScreen,
  StepSmallScreen
} from "../../utils/ScreenSizing";


export default function MoviesCardList({ filteredMovies, onDelete, toggleMovie, savedMovies, isLoading, serverError }) {
  const { pathname } = useLocation();
  const [count, setCount] = useState('');
  const fact = filteredMovies.slice(0, count);

  function printCards() {
    const counter = { init: InitMoreMaxScreen, step: StepMaxScreen }
    if (window.innerWidth < MaxScreen) {
      counter.init = InitLessMaxScreen
      counter.step = StepMediumScreen
    }
    if (window.innerWidth < MediumScreen) {
      counter.init = InitMediumScreen
      counter.step = StepSmallScreen
    }
    if (window.innerWidth < SmallScreen) {
      counter.init = InitSmallScreen
      counter.step = StepSmallScreen
    }
    return counter
  }

  useEffect(() => {
    if (pathname === '/movies') {
      setCount(printCards().init)
      function printCardsForResize() {
        if (window.innerWidth >= StepMaxScreen) {
          setCount(printCards().init)
        }
        if (window.innerWidth < StepMaxScreen) {
          setCount(printCards().init)
        }
        if (window.innerWidth < MediumScreen) {
          setCount(printCards().init)
        }
        if (window.innerWidth < SmallScreen) {
          setCount(printCards().init)
        }
      }
      window.addEventListener('resize', printCardsForResize)
      return () => window.removeEventListener('resize', printCardsForResize)
    }
  }, [pathname, filteredMovies])

  function loadMore() {
    setCount(count + printCards().step)
  }

  return (<section className='card-list'>
    <ul className="card-list__list">
      {isLoading ? <Preloader /> :
        (pathname === '/movies' && fact.length !== 0) ?
          fact.map(data => {
            return (
              <MoviesCard
                key={data.id}
                savedMovies={savedMovies}
                toggleMovie={toggleMovie}
                data={data}
              />
            )
          }) : filteredMovies.length !== 0 ?
            filteredMovies.map(data => {
              return (
                <MoviesCard
                  key={data._id}
                  onDelete={onDelete}
                  data={data}
                />
              )
            }) : serverError ?
              <>
                <span className='card-list__search-error'></span>
                <span className='card-list__search-error'>Во время запроса произошла ошибка.
                  Возможно, проблема с соединением или сервер недоступен.
                  Подождите немного и попробуйте ещё раз
                </span>
                <span className='card-list__search-error'></span>
              </>
              : pathname === '/movies' ?
                <>
                  <span className='card-list__search-error'></span>
                  <span className='card-list__search-error'>Чтобы увидеть список фильмов выполните поиск</span>
                  <span className='card-list__search-error'></span>
                </>
                : <>
                  <span className='card-list__search-error'></span>
                  <span className='card-list__search-error'>Нет сохранённых фильмов</span>                  <span className='card-list__search-error'></span>
                </>
      }
    </ul>
    {pathname === '/movies' && <button type='button' className={`card-list__more-button ${count >= filteredMovies.length && 'card-list__more-button_hidden'}`} onClick={loadMore}>Ёще</button>}
  </section>
  )
}