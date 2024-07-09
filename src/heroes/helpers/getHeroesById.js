import { mappedHeroes } from "../data/mappedHeroes"


export const getHeroesById = (id) => {
    const heroes=mappedHeroes()
  const hero=heroes.find(hero=>hero.id==id)
    return hero
}
