import './BurgerMenu.css';
import { NavLink, Link } from 'react-router-dom';

export default function BurgerMenu({ isOpenBurger, closeClick }) {
  return (
    <>
      <section className={`burger-menu ${isOpenBurger ? 'burger-menu_type_active' : ''} `} onClick={() => { closeClick() }}>
        <div className='burger-menu__blur' />
        <div className='burger-menu__content' onClick={e => e.stopPropagation()}>
          <button type='button' className='burger-menu__close-button' onClick={closeClick} />
          <nav className='burger-menu__nav'>
            <ul className='burger-menu__links'>
              <li className='burger-menu__li'>
                <NavLink to="/" className='burger-menu__link'>Главная</NavLink>
              </li>
              <li className='burger-menu__li'>
                <NavLink to="/movies" className='burger-menu__link'>Фильмы</NavLink>
              </li>
              <li className='burger-menu__li'>
                <NavLink to="/saved-movies" className='burger-menu__link'>Сохранённые фильмы</NavLink>
              </li>
            </ul>
            <Link to="/profile" className='burger-menu__account-button'>
              Аккаунт
            </Link>
          </nav>
        </div>
      </section>
    </>
  )
}