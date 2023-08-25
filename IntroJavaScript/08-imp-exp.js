import heroes from './data/heroes';

export const getHeroById = (id) => heroes.find((heroes) => heroes.id === id);
console.log(getHeroById(2));

export const getHeroByOwner = (owner) => heroes.filter((heroes) => heroes.owner === owner);
console.log(getHeroByOwner('Marvel'));