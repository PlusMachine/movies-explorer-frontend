import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from './../Footer/Footer';
import './SavedMovies.css';

import BurgerMenu from '../BurgerMenu/BurgerMenu';

export default function SavedMovies({ burgerClick }) {
  return (
    <>
      <Header burgerClick={burgerClick} />
      <section className='saved-movies'>
        <SearchForm />
        <MoviesCardList />
      </section>
      <BurgerMenu />
      <Footer />
    </>
  );
}