import './MoviesCard.css';
import movie__pic from '../../images/movie-example.jpg';

export default function MoviesCard() {
  return (
    <li className='movies-card'>
      <img className='movies-card__image' src={movie__pic} alt="Фильм 1" />
      <button className="movies-card__button">Сохранить</button>
      <div className='movies-card__info'>
        <p className="movies-card__title">33 слова о дизайне</p>
        <p className="movies-card__duration">1ч 17м</p>
      </div>
    </li>
  )
}