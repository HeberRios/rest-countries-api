import '../styles/SearchAndFilter.css';
import { ArrowDownIcon } from './icons/ArrowDownIcon';
import { SearchIcon } from './icons/SearchIcon';

export function SearchAndFilter() {
  return (
    <div className='container search-filter-section'>
      <div className='search-bar-container'>
        <form action='' className='country-search-form'>
          <button type='submit' className='btn search-bar-btn'>
            <SearchIcon />
          </button>
          <input
            type='text'
            name=''
            id=''
            className='search-bar'
            placeholder='Search for a country...'
          />
        </form>
      </div>

      <div className='filters-container'>
        <select defaultValue='' name='region' className='filters-menu' id=''>
          <option value='' style={{ display: 'none' }}>
            Filter by Region
          </option>
          <option value='africa'>Africa</option>
          <option value='america'>America</option>
          <option value='asia'>Asia</option>
          <option value='europe'>Europe</option>
          <option value='oceania'>Oceania</option>
        </select>
				<ArrowDownIcon/>
      </div>
    </div>
  );
}
