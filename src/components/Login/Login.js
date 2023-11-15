import logo from '../../images/logo__COLOR_main-1-min.svg';
import { Link } from 'react-router-dom';
import './Login.css';
import useFormWithValidation from '../../utils/Validation';

export default function Login({ onLogin, authError, isSending }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmitClick(e) {
    e.preventDefault();
    onLogin({ email: values.email, password: values.password });
  }

  return (
    <main className="main">
      <section className='login'>
        <Link to="/" className='login__logo'>
          <img src={logo} alt="логотип" className='login__logo-pic' />
        </Link>
        <h1 className='login__title'>Рады видеть!</h1>
        <form className='login__form' onSubmit={handleSubmitClick}>
          <fieldset className='login__fieldset'>
            <span className='login__input-error'></span>
            <label className='login__form-label'>
              <span className='login__input-title'>E-mail</span>
              <input className={`login__input ${errors.email ? 'login__input_type_wrong' : ''}`} required placeholder='Введите E-mail' minLength="2"
                maxLength="40" onChange={handleChange} name='email' type='email' value={values.email} disabled={isSending} />
              <span className='login__input-error'>{errors.email}</span>
            </label>
            <label className='login__form-label'>
              <span className='login__input-title'>Пароль</span>
              <input className={`login__input ${errors.password ? 'login__input_type_wrong' : ''}`} type='password' required placeholder='Введите пароль' minLength="2"
                maxLength="40" onChange={handleChange} name='password' value={values.password} />
              <span className='login__input-error'>{errors.password}</span>
            </label>
            <span className='login__auth-error'>{authError}</span>
            <button className={`login__submit-button ${isValid && authError === "" ? "" : 'login__submit-button_disabled'}`} type="submit" disabled={!isValid || authError !== "" ? true : ''} >Войти</button>
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