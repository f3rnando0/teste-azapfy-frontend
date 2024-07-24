'use client';

import { Hero } from '@/interfaces/hero';
import axios from 'axios';
import Image from 'next/image';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Heroes() {
  const [data, setData] = useState<Hero[]>([]);

  useEffect(() => {
    axios
      .get<Hero[]>('http://homologacao3.azapfy.com.br/api/ps/metahumans')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  if (data) {
    return (
      <div className="w-full p-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {data.map((hero) => {
            return (
              <div key={hero.id} className="p-4 rounded-lg">
                <Image
                  className="rounded-t w-full"
                  src={hero.images.lg!}
                  alt={hero.name}
                  width={250}
                  height={250}
                />
                <div className="border-t border-neutral-800 rounded-b-lg p-4 bg-neutral-900">
                  <span className="text-xs sm:text-xs md:text-sm lg:text-lg font-pretty font-bold">
                    {hero.name}
                  </span>
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
