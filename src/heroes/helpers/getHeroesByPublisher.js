
import { mappedHeroes  }  from "../data/mappedHeroes"

/**
 * 
 * @param {string} publisher 
 * @returns heroes of the publishet or an Error
 */
export const getHeroesByPublisher = (publisher) => {

    const heroes=mappedHeroes()
    if (publisher !== 'DC Comics' && publisher !== "Marvel Comics") {
        throw new Error(`${publisher} is not a valid publisher`)
    }
    return heroes.filter(hero=>hero.publisher===publisher)
}
