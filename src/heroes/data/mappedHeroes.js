import { heroes } from "./heroes"


export const mappedHeroes = () => {
    const heroesCamelCase=heroes.map(hero => ({
        firstAppearance:  hero.first_appearance,
        superhero: hero.superhero,
        publisher: hero.publisher,
        alterEgo: hero.alter_ego,
        id: hero.id,
        characters:hero.characters
    }))
    return heroesCamelCase
}