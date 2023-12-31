import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <main className='main'>
      <section className='not-found'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__text'>Страница не найдена</p>
        <Link to="/" className='not-found__back-link'>
          Назад
        </Link>
      </section>
    </main>
  );
}