import './Navigation.css';
import { Link } from 'react-router-dom';


export default function Navigation() {
  return (
    <div className='header__auth'>
      <Link className='header__auth-button' to="/signup" >Регистрация</Link>
      <Link className='header__auth-button header__auth-active-button' to="/signin" >Войти</Link>
    </div>
  );
}