
// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'Diego'
// }; 

//tener este const ya no tendra que ser re-renderizado en el componente
//no se puede imprimir una const de tipo objeto con llaves y propiedades dentro

// const getResult = () => {
//     return 4 + 4;
// }
import PropTypes from 'prop-types';


export const FirstApp = ({title,subTitle,name}) => {  // yo soy el componente
  
  
  return (
    <>
    <h1>{title}</h1>
    {/* <code>{JSON.stringify(newMessage)}</code> */}
    <p>{subTitle}</p>
    <p>{name}</p>
    </>
  )
}

FirstApp.PropTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  title: 'No existe un titulo',
  subTitle: 'No hay un subtitulo',
  name: 'Diego Escobedo'
}
