import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList() {
  return (<section className='card-list'>
    <ul className="card-list__list">
      <MoviesCard titleCard={'Фильм 1'} />
      <MoviesCard titleCard={'Фильм 2'} />
      <MoviesCard titleCard={'Фильм 3'} />
      <MoviesCard titleCard={'Фильм 4'} />
      <MoviesCard titleCard={'Фильм 5'} />
    </ul>
    <button type='button' className='card-list__more-button'>Ещё</button>
  </section>
  )
}