export interface Hero {
  appearance: {
    eyeColor: string | null;
    gender: string | null;
    height: string[] | null[];
    race: string | null;
    weight: string[] | null[];
  };
  biography: {
    aliases: string[] | null[];
    alignment: string | null;
    alterEgos: string | null;
    firstAppearance: string | null;
    fullName: string | null;
    placeOfBirth: string | null
    publisher: string | null;
  };
  connections: {
    groupAffiliation: string | null;
    relatives: string | null;
  };
  id: number;
  images: {
    xs: string | null;
    lg: string | null;
    sm: string | null;
    md: string | null;
  };
  name: string;
  powerstats: {
    combat: number;
    durability: number;
    intelligence: number;
    power: number;
    speed: number;
    strength: number;
  };
  slug: string;
  work: {
    base: string | null;
    occupation: string | null; 
  };
}
