import './Main.css';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from './../Footer/Footer';
import Header from './../Header/Header';

export default function Main({ burgerClick, loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} burgerClick={burgerClick} />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}