import './Profile.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import useFormWithValidation from '../../utils/Validation';
import { useContext, useEffect, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';

export default function Profile({ burgerClick, loggedIn, onLogout, onEdit, setUser, editError }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const [isSaveButton, setIsSaveButton] = useState(false);


  useEffect(() => { resetForm({ username: currentUser.name, email: currentUser.email }) }, [currentUser, resetForm, onEdit])

  function handleSubmitClick(e) {
    const token = localStorage.getItem('token');
    e.preventDefault();
    onEdit({ name: values.username, email: values.email }, token);
    setUser({ username: values.username, email: values.email });
    setIsSaveButton(false);
  }

  function handleClickSaveButton() {
    setIsSaveButton(!isSaveButton);
  }


  return (
    <>
      <Header loggedIn={loggedIn} burgerClick={burgerClick} />
      <main className='main'>
        <section className='profile'>
          <h1 className='profile__title'>Привет, {currentUser.name}</h1>
          <form className='profile__form' onSubmit={handleSubmitClick}>
            <fieldset className='profile__fieldset'>
              <label className='profile__form-label'>
                <span className='profile__input-title'>Имя</span>
                <input className='profile__input profile__input_name' placeholder='Введите имя' minLength="2" name='username'
                  maxLength="40" onChange={handleChange} type='text' disabled={!isSaveButton} value={values.username || ''} />
              </label>
              <label className='profile__form-label' >
                <span className='profile__input-title'>E-mail</span>
                <input className='profile__input profile__input_email' placeholder='Введите e-mail' minLength="2" name='email'
                  maxLength="40" onChange={handleChange} type='email' disabled={!isSaveButton} value={values.email || ''} />
              </label>
              <span className='profile__input-error'>{errors.username}</span>
              <span className='profile__input-error'>{errors.email}</span>
              {isSaveButton ? (
                <button
                  className={`profile__button-save ${isValid && editError === "" ? "" : 'profile__button-save_disabled'} ${values.username === currentUser.name && values.email === currentUser.email ? 'profile__button-save_disabled' : ''}`}
                  disabled={!isValid || editError !== "" || (values.username === currentUser.name && values.email === currentUser.email) ? true : ''}
                  type='submit'
                >
                  Сохранить
                </button>
              ) : null}
            </fieldset>
          </form>
          <span className={`profile__succeful-title ${editError !== "" ? "profile__succeful-title_active" : ""}`}>{editError}</span>
          {isSaveButton ? null : (
            <>
              <button className='profile__button-edit' onClick={handleClickSaveButton}>Редактировать</button>
              <Link to="/" className='profile__exit-link' onClick={onLogout}>Выйти из аккаунта</Link>
            </>)}
        </section>
      </main>
    </>
  );
}