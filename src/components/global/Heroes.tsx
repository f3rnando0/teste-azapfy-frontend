'use client';

import { useSelectionContext } from '@/contexts/selectionContext';
import { Hero } from '@/interfaces/hero';
import { MinusIcon, PlusIcon } from 'lucide-react';
import Image from 'next/image';

type HeroesProps = {
  data: Hero[];
};

export default function Heroes({ data }: HeroesProps) {
  const { selected, setSelected } = useSelectionContext();

  const handleSelect = (hero: Hero) => {
    if (selected.some((selectedHero) => selectedHero.id === hero.id)) {
      setSelected(
        selected.filter((selectedHero) => selectedHero.id !== hero.id)
      );
    } else {
      setSelected([...selected, hero]);
    }
  };

  if (data) {
    return (
      <div className="w-full p-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {data.map((hero) => {
            return (
              <div key={hero.id} className="p-4 rounded-lg">
                <Image
                  className="rounded-t w-full select-none"
                  src={
                    hero.images.lg
                      ? hero.images.lg
                      : hero.images.md
                      ? hero.images.md
                      : hero.images.sm
                      ? hero.images.sm
                      : hero.images.xs
                      ? hero.images.xs
                      : ''
                  }
                  alt={hero.name}
                  width={250}
                  height={250}
                />
                <div className="border-t border-neutral-800 rounded-b-lg p-4 bg-neutral-900">
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-xs sm:text-xs md:text-sm lg:text-lg font-pretty font-bold">
                      {hero.name}
                    </span>
                    {!selected.includes(hero) && (
                      <div
                        className="p-2 bg-white rounded-full cursor-pointer hover:bg-neutral-200 transition-all"
                        onClick={() => handleSelect(hero)}
                      >
                        <PlusIcon className="w-4 h-4 stroke-black" />
                      </div>
                    )}
                    {selected.includes(hero) && (
                      <div
                        className="p-2 bg-white rounded-full cursor-pointer hover:bg-neutral-200 transition-all"
                        onClick={() => handleSelect(hero)}
                      >
                        <MinusIcon className="w-4 h-4 stroke-black" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
}
