import './FilterCheckbox.css';

export default function FilterCheckbox() {
  return (
    <fieldset className="filter-checkbox">
      <label className='filter-checkbox__cover' for="filter-checkbox__button">
        <input
          type="checkbox"
          className="filter-checkbox__default"
          id="filter-checkbox__button"
        />
        <div className='filter-checkbox__slider circle'></div>
      </label>
      <span className="filter-checkbox__text">Короткометражки</span>
    </fieldset>
  )
}