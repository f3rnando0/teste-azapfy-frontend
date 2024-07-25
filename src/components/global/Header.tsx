'use client';

import { SetStateAction } from 'react';
import Search from '../header/Search';
import { Dispatch } from 'react';
import { Hero } from '@/interfaces/hero';
import { useSelectionContext } from '@/contexts/selectionContext';
import { useState } from 'react';
import Modal from './Modal';
import HeroImageSlider from '../add-ons/HeroImageSlider';

type HeaderProps = {
  setData: Dispatch<SetStateAction<Hero[]>>;
  data: Hero[];
};

export default function Header({ setData, data }: HeaderProps) {
  const { selected } = useSelectionContext();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleResult = (e: React.MouseEvent<HTMLButtonElement>) => {
    openModal();
  };

  return (
    <div className="max-w-full p-2 sm:p-6 md:p-10 bg-neutral-900 border-b border-neutral-700 sticky top-0 z-50">
      <div className="flex flex-row justify-between items-center gap-4">
        <div>
          <span className="text-neutral-300 text-pretty text-center sm:text-lg md:text-xl lg:text-2xl font-semibold">
            hero.hub
          </span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Search setData={setData} data={data} />
          {selected && selected.length > 1 && (
            <button
              className="bg-green-400 text-black font-pretty p-2 rounded-lg font-bold text-xs hover:brightness-90 transition-all"
              onClick={handleResult}
            >
              Quem é o campeão?
            </button>
          )}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold mb-4">O campeão dos hérois é...</h2>
        <div className="h-[270px]">
          <HeroImageSlider heroes={selected} />
        </div>
      </Modal>
    </div>
  );
}
