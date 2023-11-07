import './AboutMe.css';
import photo from '../../images/pic__COLOR_pic.jpg';

export default function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <div className='about-me__title-container'>
        <h2 className='about-me__title'>
          Студент
        </h2>
      </div>
      <div className='about-me__block'>
        <div className='about-me__info'>
          <h3 className='about-me__name'>
            Виталий
          </h3>
          <p className='about-me__function'>
            Фронтенд-разработчик, 30 лет
          </p>
          <p className='about-me__text'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className='about-me__git' href="https://github.com/PlusMachine/" target='blank'>Github</a>
        </div>
        <img
          src={photo}
          alt="фото студента"
          className="about-me__photo" />
      </div>
    </section>
  );
}