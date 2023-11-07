import './Profile.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

export default function Profile({ burgerClick }) {
  return (
    <>
      <Header burgerClick={burgerClick} />
      <main className='main'>
        <section className='profile'>
          <h1 className='profile__title'>Привет, Виталий!</h1>
          <form className='profile__form'>
            <fieldset className='profile__fieldset'>
              <label className='profile__form-label'>
                <span className='profile__input-title'>Имя</span>
                <input className='profile__input profile__input_name' placeholder='Введите имя' minLength="2"
                  maxLength="40" />
              </label>
              <label className='profile__form-label' >
                <span className='profile__input-title'>E-mail</span>
                <input className='profile__input profile__input_email' placeholder='Введите e-mail' minLength="2"
                  maxLength="40" />
              </label>
            </fieldset>
          </form>
          <button className='profile__button-edit'>Редактировать</button>
          <Link to="/" className='profile__exit-link'>Выйти из аккаунта</Link>
        </section>
      </main>
    </>
  );
}