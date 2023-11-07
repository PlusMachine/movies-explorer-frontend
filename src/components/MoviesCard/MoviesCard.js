import './MoviesCard.css';
import movie__pic from '../../images/movie-example.jpg';

export default function MoviesCard({ titleCard }) {
  return (
    <li className='movies-card'>
      <img className='movies-card__image' src={movie__pic} alt={titleCard} />
      <button type='button' className="movies-card__button">Сохранить</button>
      <div className='movies-card__info'>
        <h2 className="movies-card__title">33 слова о дизайне</h2>
        <p className="movies-card__duration">1ч 17м</p>
      </div>
    </li>
  )
}