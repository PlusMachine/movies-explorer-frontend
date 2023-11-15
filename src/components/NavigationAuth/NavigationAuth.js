import './NavigationAuth.css';
import { NavLink } from 'react-router-dom';


export default function NavigationAuth({ burgerClick }) {
  return (
    <>
      <nav className='header__menu'>
        <NavLink className='header__menu-button' activeClassName="header__menu-button_active" to="/movies" >Фильмы</NavLink>
        <NavLink className='header__menu-button' activeClassName="header__menu-button_active" to="/saved-movies" >Сохранённые фильмы</NavLink>
      </nav>
      <nav className='header__auth'>
        <NavLink className='header__account-button' to='/profile' >Аккаунт</NavLink>
        <button type='button' className='header__burger-button' onClick={burgerClick}></button>
      </nav>
    </>
  );
}