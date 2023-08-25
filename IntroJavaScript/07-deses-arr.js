const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const useState = (valor) => {
    return [valor , () => {console.log('Hola Mundo')}];
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const [nombre, setNombre] = useState('Diego');
console.log(nombre)
setNombre()