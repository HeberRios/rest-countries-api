import { createContext, useState } from 'react';
import { Filter, FilterContextType, FilterProviderProps } from './types/types';

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
);

export function FilterProvider({ children }: FilterProviderProps) {
  const [filter, setFilter] = useState<Filter>({ region: 'all' });

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
