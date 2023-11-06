import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList() {
  return (<section className='card-list'>
    <ul className="card-list__list">
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
    </ul>
    <button className='card-list__more-button'>Ещё</button>
  </section>
  )
}