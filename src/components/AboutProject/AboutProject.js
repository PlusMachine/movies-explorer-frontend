import './AboutProject.css';

export default function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <div className='about-project__title-container'>
        <h2 className='about-project__title'>
          О проекте
        </h2>
      </div>
      <ul className='about-project__points'>
        <li className='about-project__table-cell'>
          <h3 className='about-project__point-title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__text'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </li>
        <li className='about-project__table-cell'>
          <h3 className='about-project__point-title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className='about-project__duration'>
        <p className='about-project__progress-cell about-project__progress-cell_m about-project__progress-cell_color_green'>
          1 неделя
        </p>
        <p className='about-project__progress-cell about-project__progress-cell_l about-project__progress-cell_color_gray'>
          4 недели
        </p>
        <p className='about-project__progress-cell about-project__progress-cell_m'>
          Back-end
        </p>
        <p className='about-project__progress-cell about-project__progress-cell_l'>
          Front-end
        </p>
      </div>
    </section>
  );
}