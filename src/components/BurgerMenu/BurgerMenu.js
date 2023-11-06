import './BurgerMenu.css';
import { Link } from 'react-router-dom';

export default function BurgerMenu({ isOpenBurger, closeClick }) {
  return (
    <>
      <section className={`burger-menu ${isOpenBurger ? 'burger-menu_type_active' : ''} `} onClick={() => { closeClick() }}>
        <div className='burger-menu__blur' />
        <div className='burger-menu__content' onClick={e => e.stopPropagation()}>
          <button className='burger-menu__close-button' onClick={closeClick} />
          <nav className='burger-menu__nav'>
            <ul className='burger-menu__links'>
              <li className='burger-menu__li'>
                <Link to="/" className='burger-menu__link'>Главная</Link>
              </li>
              <li className='burger-menu__li'>
                <Link to="/movies" className='burger-menu__link burger-menu__link_type_active'>Фильмы</Link>
              </li>
              <li className='burger-menu__li'>
                <Link to="/saved-movies" className='burger-menu__link'>Сохранённые фильмы</Link>
              </li>
            </ul>
            <Link to="/profile">
              <button className='burger-menu__account-button'>Аккаунт</button>
            </Link>
          </nav>
        </div>
      </section>
    </>
  )
}