import './FilterCheckbox.css';

export default function FilterCheckbox({ toggleShort, isShort }) {
  return (
    <fieldset className="filter-checkbox">
      <label className='filter-checkbox__cover' htmlFor="filter-checkbox__button">
        <input
          type="checkbox"
          className="filter-checkbox__default"
          id="filter-checkbox__button"
          onChange={() => toggleShort()}
          checked={isShort}
        />
        <div className='filter-checkbox__slider circle'></div>
      </label>
      <span className="filter-checkbox__text">Короткометражки</span>
    </fieldset>
  )
}