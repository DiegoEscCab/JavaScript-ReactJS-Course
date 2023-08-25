//Desestructuracion de Objetos
//Asignacion Desestructurante

const persona = {
    nombre: 'Diego',
    edad: 26,
    clave: 'Bot',
    rango: 'Cabo',
};

// const {nombre, edad, clave} = persona;

// // console.log(persona.nombre);
// // console.log(persona.edad);
// // console.log(persona.clave);

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({clave, nombre, edad, rango = 'Capitan'}) => {
    // console.log(nombre, edad, rango);
    return{
        nombreClave: clave,
        age: edad,
        latlng:{
            lat: 12.4545,
            lng: 56.3232
        }
    }
}


// eslint-disable-next-line react-hooks/rules-of-hooks
const {nombreClave, age, latlng:{lat, lng}} = useContext(persona);
console.log(nombreClave, age, lat,lng)
