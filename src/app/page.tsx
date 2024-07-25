'use client';

import Header from '@/components/global/Header';
import Heroes from '@/components/global/Heroes';
import { Hero } from '@/interfaces/hero';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState<Hero[]>([]);

  useEffect(() => {
    axios
      .get<Hero[]>('http://homologacao3.azapfy.com.br/api/ps/metahumans')
      .then((response) => {
        setData(response.data);
        window.localStorage.setItem('data', JSON.stringify(response.data));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  return (
    <>
      <Header setData={setData} data={data} />
      <Heroes data={data} />
    </>
  );
}
