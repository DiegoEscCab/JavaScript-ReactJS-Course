const name = 'Diego';
const lastName = 'Escobedo';

// const fullName = name + ' ' + lastName;
const fullName = `
${name}
${lastName}
${1 + 1}
`;

console.log(fullName);

function getSaludo(name){
    return 'Hola ' + name;
}

console.log(`Lo siguiente es un texto: ${getSaludo(name)}`);