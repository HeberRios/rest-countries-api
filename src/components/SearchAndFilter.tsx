import '../styles/SearchAndFilter.css';
import { useFilter } from '../hooks/useFilter';
import { ArrowDownIcon } from './icons/ArrowDownIcon';
import { SearchIcon } from './icons/SearchIcon';
import { debounce } from '../utils/utils';
import React, { useMemo, useState } from 'react';

export function SearchAndFilter() {
  const { filter, setFilter } = useFilter();

  const [searchInputValue, setSearchInputValue] = useState(filter.query);

  const debounceSearchInput = useMemo(() => {
    return debounce((queryValue: string) => {
      setFilter((prevState) => {
        return {
          ...prevState,
          query: queryValue,
        };
      });
    }, 500);
  }, [setFilter]);

  function handleSearchBarSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function handleSearchBarChange(e: React.ChangeEvent<HTMLInputElement>) {
    const queryValue = e.target.value;

    setSearchInputValue(queryValue);
    debounceSearchInput(queryValue);
  }

  function handleRegionChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setFilter((prevState) => {
      return {
        ...prevState,
        region: e.target.value,
      };
    });
  }

  return (
    <div className='search-filter-section'>
      <div className='container search-filter-container'>
        <div className='search-bar-container'>
          <form
            onSubmit={handleSearchBarSubmit}
            action=''
            className='country-search-form'
          >
            <input
              type='text'
              name=''
              id=''
              className='search-bar'
              placeholder='Search for a country...'
              onChange={handleSearchBarChange}
              value={searchInputValue}
            />

            <button type='submit' className='btn search-bar-btn'>
              <SearchIcon />
            </button>
          </form>
        </div>

        <div className='filters-container'>
          <select
            value={filter.region}
            onChange={handleRegionChange}
            name='region'
            className='filters-menu'
            id=''
          >
            <option value='all'>Filter by region</option>
            <option value='africa'>Africa</option>
            <option value='americas'>America</option>
            <option value='asia'>Asia</option>
            <option value='europe'>Europe</option>
            <option value='oceania'>Oceania</option>
          </select>
          <ArrowDownIcon />
        </div>
      </div>
    </div>
  );
}
