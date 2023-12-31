import './Portfolio.css';
import arrow from '../../images/text__COLOR_font-main.svg';

export default function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>
        Портфолио
      </h2>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a href="https://github.com/PlusMachine/how-to-learn" target="blank" className='portfolio__item'>
            <p className='portfolio__item-text'>Статичный сайт</p>
            <img
              src={arrow}
              alt="стрелочка"
              className="portfolio__arrow" />
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a href="https://github.com/PlusMachine/russian-travel" target="blank" className='portfolio__item'>
            <p className='portfolio__item-text'>Адаптивный сайт</p>
            <img
              src={arrow}
              alt="стрелочка"
              className="portfolio__arrow" />
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a href="https://github.com/PlusMachine/mesto" target="blank" className='portfolio__item'>
            <p className='portfolio__item-text'>Одностраничное приложение</p>
            <img
              src={arrow}
              alt="стрелочка"
              className="portfolio__arrow" />
          </a></li>
      </ul>
    </section >
  );
}