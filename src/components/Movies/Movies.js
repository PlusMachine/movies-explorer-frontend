import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from './../Footer/Footer';
import './Movies.css';

export default function Movies({ burgerClick }) {
  return (
    <>
      <Header burgerClick={burgerClick} />
      <section className='movies'>
        <SearchForm />
        <MoviesCardList />
      </section>
      <Footer />
    </>
  );
}