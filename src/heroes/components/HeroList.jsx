import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher),[publisher]);
  return (
   
      <div className="cards-container">
        {heroes.map(hero => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    
  );
};
