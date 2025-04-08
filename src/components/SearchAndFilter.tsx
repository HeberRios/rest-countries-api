import { SearchIcon } from './icons/SearchIcon';

export function SearchAndFilter() {
  return (
    <div className='container search-filter-section'>
      <div className='search-bar-container'>
        <form action='' className='country-search-form'>
          <button type='submit'>
            <SearchIcon />
          </button>
          <input type='text' name='' id='' className='search-bar' />
        </form>
      </div>

      <select defaultValue='' name='region' id=''>
        <option value='' style={{ display: 'none' }}>
          Filter by Region
        </option>
        <option value='africa'>Africa</option>
        <option value='america'>America</option>
        <option value='asia'>Asia</option>
        <option value='europe'>Europe</option>
        <option value='oceania'>Oceania</option>
      </select>
    </div>
  );
}
