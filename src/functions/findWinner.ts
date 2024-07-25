import { Hero } from '@/interfaces/hero';

const calculatePowerstatsSum = (hero: Hero): number => {
  return Object.values(hero.powerstats).reduce((acc, stat) => acc + stat, 0);
};

export const findHeroWithHighestPowerstats = (heroes: Hero[]): Hero | null => {
  return heroes.reduce((highest, hero) => {
    if (!highest) return hero;
    return calculatePowerstatsSum(hero) > calculatePowerstatsSum(highest)
      ? hero
      : highest;
  }, null as Hero | null);
};
