const persona = {
    name: 'Tony',
    lastName: 'Stark',
    age: 45,
    direction: {
        latitud: 12.1212,
        altitud: 42.4242,
        zip: 34000,
        city: 'Ontario',
    }
};
// console.table({persona});

const persona2 = {...persona};
persona2.name = 'Diego';

console.log(persona);
console.log(persona2);