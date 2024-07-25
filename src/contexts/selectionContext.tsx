'use client';

import { Hero } from '@/interfaces/hero';
import { useContext, useState, createContext, ReactNode } from 'react';

type SelectionContextType = {
  selected: Hero[];
  setSelected: React.Dispatch<React.SetStateAction<Hero[]>>;
};

const SelectionContext = createContext<SelectionContextType | null>(null);

export function SelectionWrapper({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<Hero[]>([]);

  return (
    <SelectionContext.Provider value={{ selected, setSelected }}>
      {children}
    </SelectionContext.Provider>
  );
}

export function useSelectionContext() {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error(
      'useSelectionContext must be used within a SelectionWrapper'
    );
  }
  return context;
}
