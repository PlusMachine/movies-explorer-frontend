import './Header.css';
import logo from '../../images/logo__COLOR_main-1-min.svg';
import { Link } from 'react-router-dom';
// import Navigation from '../Navigation/Navigation';
import NavigationAuth from '../NavigationAuth/NavigationAuth';

export default function Header({ burgerClick }) {
  return (
    < header className="header" >
      <Link to='/' className='header__logo-link'>
        <img
          src={logo}
          alt="логотип"
          className="header__logo" />
      </Link>
      {/* <Navigation /> */}
      <NavigationAuth burgerClick={burgerClick} />
    </header>
  );
}