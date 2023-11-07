import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from './../Footer/Footer';
import './SavedMovies.css';

export default function SavedMovies({ burgerClick }) {
  return (
    <>
      <Header burgerClick={burgerClick} />
      <main>
        <section className='saved-movies'>
          <SearchForm />
          <MoviesCardList />
        </section>
      </main>
      <Footer />
    </>
  );
}