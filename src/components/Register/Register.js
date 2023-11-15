import logo from '../../images/logo__COLOR_main-1-min.svg';
import { Link } from 'react-router-dom';
import './Register.css';
import useFormWithValidation from '../../utils/Validation';
import { emailRegex } from '../../utils/Regex';

export default function Register({ onRegister, authError, isSending }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmitClick(e) {
    e.preventDefault();
    onRegister({ username: values.username, password: values.password, email: values.email })
  }

  return (
    <main className="main">
      <section className='register'>
        <Link to="/" className='register__logo'>
          <img src={logo} alt="логотип" className='register__logo-pic' />
        </Link>
        <h1 className='register__title'>Добро пожаловать!</h1>
        <form className='register__form' onSubmit={handleSubmitClick}
        >
          <fieldset className='register__fieldset'>
            <label className='register__form-label'>
              <span className='register__input-title'>Имя</span>
              <input className='register__input register__input-name' required
                minLength="2"
                maxLength="40" placeholder='Введите имя' onChange={handleChange} name='username' type='text' disabled={isSending}
              />
              <span className='register__input-error'>{errors.username}</span>
            </label>
            <label className='register__form-label'>
              <span className='register__input-title'>E-mail</span>
              <input className={`register__input ${errors.email ? 'register__input_type_wrong' : ''}`} required placeholder='Введите E-mail' minLength="2"
                maxLength="40" onChange={handleChange} name='email' type='email' disabled={isSending} pattern={emailRegex}
              />
              <span className='register__input-error'>{errors.email}</span>
            </label>
            <label className='register__form-label'>
              <span className='register__input-title'>Пароль</span>
              <input className={`register__input ${errors.password ? 'register__input_type_wrong' : ''}`} type='password' minLength="2"
                maxLength="40" required placeholder='Введите пароль' onChange={handleChange} name='password' disabled={isSending}
              />
              <span className='register__input-error'>{errors.password}</span>
            </label>
            <span className='register__auth-error'>{authError}</span>
            <button className={`register__submit-button ${isValid && authError === "" ? "" : 'register__submit-button_disabled'}`} disabled={!isValid || authError !== "" ? true : ''} type="submit">Зарегистрироваться</button>
          </fieldset>
          <p className='register__hint'>
            Уже зарегистрированы?
            <Link to="/signin" className='register__login-button' >Войти</Link>
          </p>
        </form>
      </section>
    </main>
  );
}
