import FilterCheckbox from './../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

export default function SearchForm() {
  return (
    <div className='search-form'>
      <form className='search-form__form'>
        <fieldset className='search-form__fieldset'>
          <input className='search-form__input' placeholder='Фильм' required />
          <button className='search-form__button'></button>
        </fieldset >
        <FilterCheckbox />
      </form>
    </div>
  )
}