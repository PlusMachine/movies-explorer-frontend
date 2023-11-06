import logo from '../../images/logo__COLOR_main-1-min.svg';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  return (
    <main className="main">
      <section className='login'>
        <Link to="/" className='login__logo'>
          <img src={logo} alt="логотип" className='login__logo-pic' />
        </Link>
        <h1 className='login__title'>Рады видеть!</h1>
        <form className='login__form'>
          <fieldset className='login__fieldset'>
            <span className='login__input-error'></span>
            <label className='login__form-label'>
              <span className='login__input-title'>E-mail</span>
              <input className='login__input login__input-email' />
            </label>
            <span className='login__input-error'></span>
            <label className='login__form-label'>
              <span className='login__input-title'>Пароль</span>
              <input className='login__input login__input-password' type='password' />
            </label>
            <span className='login__input-error'>Что-то пошло не так...</span>
            <button className='login__submit-button'>Войти</button>
          </fieldset>
          <p className='login__hint'>
            Ещё не зарегистрированы?
            <Link to="/signup" className='login__register-button'>Регистрация</Link>
          </p>
        </form>
      </section>
    </main>
  );
}