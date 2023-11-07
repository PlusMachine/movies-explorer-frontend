import logo from '../../images/logo__COLOR_main-1-min.svg';
import { Link } from 'react-router-dom';
import './Register.css';

export default function Register() {
  return (
    <main className="main">
      <section className='register'>
        <Link to="/" className='register__logo'>
          <img src={logo} alt="логотип" className='register__logo-pic' />
        </Link>
        <h1 className='register__title'>Добро пожаловать!</h1>
        <form className='register__form'>
          <fieldset className='register__fieldset'>
            <label className='register__form-label'>
              <span className='register__input-title'>Имя</span>
              <input className='register__input register__input-name' required
                minLength="2"
                maxLength="40" placeholder='Введите имя' />
            </label>
            <span className='register__input-error'></span>
            <label className='register__form-label'>
              <span className='register__input-title'>E-mail</span>
              <input className='register__input register__input-email' required placeholder='Введите E-mail' minLength="2"
                maxLength="40" />
            </label>
            <span className='register__input-error'></span>
            <label className='register__form-label'>
              <span className='register__input-title'>Пароль</span>
              <input className='register__input register__input-password' type='password' minLength="2"
                maxLength="40" required placeholder='Введите пароль' />
            </label>
            <span className='register__input-error'>Что-то пошло не так...</span>
            <button className='register__submit-button'>Зарегистрироваться</button>
          </fieldset>
          <p className='register__hint'>
            Уже зарегистрированы?
            <Link to="/signin" className='register__login-button'>Войти</Link>
          </p>
        </form>
      </section>
    </main>
  );
}