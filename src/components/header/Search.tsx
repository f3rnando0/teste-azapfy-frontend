import { Hero } from '@/interfaces/hero';
import axios from 'axios';
import { SearchIcon } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

type SearchProps = {
  setData: Dispatch<SetStateAction<Hero[]>>;
  data: Hero[];
};

export default function Search({ setData, data }: SearchProps) {
  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.value === '') {
      const persistentData = window.localStorage.getItem('data');
      if (persistentData) {
        return setData(JSON.parse(persistentData));
      } else {
        axios
          .get<Hero[]>('http://homologacao3.azapfy.com.br/api/ps/metahumans')
          .then((response) => {
            setData(response.data);
            return window.localStorage.setItem(
              'data',
              JSON.stringify(response.data)
            );
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
    }

    var newData: Hero[] = [];
    data.map((hero) => {
      if (hero.name.toLowerCase().match(e.target.value.toLowerCase())) {
        newData = [...newData, hero];
      }
    });
    setData(newData);
  };

  return (
    <div className="flex flex-row items-center">
      <div className="p-2 bg-neutral-950 border-l border-y border-neutral-700 rounded-l-lg">
        <SearchIcon className="w-6 h-6 stroke-neutral-100" />
      </div>
      <input
        onChange={onChangeSearchInput}
        className="w-52 sm:w-full bg-neutral-950 p-2 rounded-r-lg border border-neutral-700 outline-none"
      />
    </div>
  );
}
