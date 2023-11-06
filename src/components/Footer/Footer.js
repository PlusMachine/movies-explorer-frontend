import './Footer.css';


export default function Header() {
  return (
    < footer className="footer" >
      <p className='footer__description'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__bottom'>
        <p className='footer__copyright'>
          © 2023
        </p>
        <div className='footer__links'>
          <a className='footer__link' href="https://practicum.yandex.ru/" target='blank'>Яндекс.Практикум</a>
          <a className='footer__link' href="https://github.com/PlusMachine" target='blank'>Github</a>
        </div>
      </div>
    </footer>
  );
}