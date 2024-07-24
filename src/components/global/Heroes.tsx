'use client';

import { Hero } from '@/interfaces/hero';
import { PlusIcon } from 'lucide-react';
import Image from 'next/image';

type HeroesProps = {
    data: Hero[];
}

export default function Heroes({ data }: HeroesProps) {
  if (data) {
    return (
      <div className="w-full p-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {data.map((hero) => {
            return (
              <div key={hero.id} className="p-4 rounded-lg">
                <Image
                  className="rounded-t w-full select-none"
                  src={hero.images.lg!}
                  alt={hero.name}
                  width={250}
                  height={250}
                />
                <div className="border-t border-neutral-800 rounded-b-lg p-4 bg-neutral-900">
                  <div className='flex flex-row justify-between items-center'>
                    <span className="text-xs sm:text-xs md:text-sm lg:text-lg font-pretty font-bold">
                      {hero.name}
                    </span>
                    <div className="p-2 bg-white rounded-full cursor-pointer hover:bg-neutral-200">
                      <PlusIcon className="w-4 h-4 stroke-black" />
                    </div>
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
