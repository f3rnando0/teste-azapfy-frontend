import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Hero } from '@/interfaces/hero';
import { findHeroWithHighestPowerstats } from '@/functions/findWinner';

type HeroImageSliderProps = {
  heroes: Hero[];
};

const fadeDuration = 0.5;
const visibleDuration = 1;

export default function HeroImageSlider({ heroes }: HeroImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showWinner, setShowWinner] = useState(false);
  const [winner, setWinner] = useState<Hero | null>(null);

  useEffect(() => {
    if (currentIndex < heroes.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, (fadeDuration * 2 + visibleDuration) * 1000);

      return () => clearTimeout(timeout);
    } else if (currentIndex === heroes.length) {
      const winner = findHeroWithHighestPowerstats(heroes);
      setWinner(winner);
      setShowWinner(true);
    }
  }, [currentIndex, heroes]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <AnimatePresence>
        {!showWinner && currentIndex < heroes.length && (
          <motion.div
            key={heroes[currentIndex].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: fadeDuration }}
            className="absolute"
          >
            <Image
              className="rounded-lg"
              src={
                heroes[currentIndex].images.lg
                  ? heroes[currentIndex].images.lg
                  : heroes[currentIndex].images.md
                  ? heroes[currentIndex].images.md
                  : heroes[currentIndex].images.sm
                  ? heroes[currentIndex].images.sm
                  : heroes[currentIndex].images.xs
                  ? heroes[currentIndex].images.xs
                  : ''
              }
              alt={heroes[currentIndex].name}
              width={150}
              height={150}
            />
          </motion.div>
        )}
        {showWinner && winner && (
          <motion.div
            key={winner.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: fadeDuration }}
            className="absolute flex flex-col justify-center items-center gap-2"
          >
            <Image
              className="rounded-lg"
              src={
                winner.images.lg
                  ? winner.images.lg
                  : winner.images.md
                  ? winner.images.md
                  : winner.images.sm
                  ? winner.images.sm
                  : winner.images.xs
                  ? winner.images.xs
                  : ''
              }
              alt={winner.name}
              width={150}
              height={150}
            />
            <span>{winner.name}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
