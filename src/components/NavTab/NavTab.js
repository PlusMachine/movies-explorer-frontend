import './NavTab.css';
import { HashLink } from 'react-router-hash-link';


export default function Promo() {
  return (
    <nav>
      <ul className='nav-tab'>
        <li className='nav-tab__list-item'>
          <HashLink className='nav-tab__button' to="#about-project" >О проекте</HashLink>
        </li>
        <li className='nav-tab__list-item'>
          <HashLink className='nav-tab__button' to="#techs" >Технологии</HashLink>
        </li>
        <li className='nav-tab__list-item'>
          <HashLink className='nav-tab__button' to="#about-me" >Студент</HashLink>
        </li>
      </ul>
    </nav>
  );
}