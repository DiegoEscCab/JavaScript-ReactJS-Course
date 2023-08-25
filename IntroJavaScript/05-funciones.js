//Funciones en JS
const saludar = function(name) {
    return `Hola, ${name}`;
}

const saludar2 = (name) => {
    return `Hola, ${name}`;
}

const saludar3 = (name) => `Hola, ${name}`;
const saludar4 = () => `Hola mundo`;

console.log(saludar('Diego'));
console.log(saludar2('Silvana'));
console.log(saludar3('Ruso'));
console.log(saludar4());

const getUser = () => ({
        uid: 'ABC123',
        username: 'BoilerSolar321'
    
})

console.log(getUser());


//Tarea
//1. Transformen a una funcion de flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas
const getUserActivo = (name) =>  ({ 
        uid: 'DEF456',
        username: name,
    })

const usuarioActivo = getUserActivo('Silvana');
console.log(usuarioActivo);