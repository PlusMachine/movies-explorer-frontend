import './NavigationAuth.css';
import { Link } from 'react-router-dom';


export default function NavigationAuth({ burgerClick }) {
  return (
    <>
      <nav className='header__menu'>
        <Link className='header__menu-button' to="/movies" >Фильмы</Link>
        <Link className='header__menu-button' to="/saved-movies" >Сохранённые фильмы</Link>
      </nav>
      <div className='header__auth'>
        <Link className='header__account-button' to='/profile' >Аккаунт</Link>
        <button className='header__burger-button' onClick={burgerClick}></button>
      </div>
    </>
  );
}