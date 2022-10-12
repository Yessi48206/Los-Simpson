
import Frases from "./componente/Frases";
import {Container, Button} from "react-bootstrap";
import {useEffect, useState} from 'react';
import Spinner from './componente/Spinner'
import simpson from '../src/img/image.png'
function App() {
 const [personaje, setPersonaje] = useState({});
 const [mostrarSpinner, setMostrarSpinner] = useState(true);
 //ciclo de vida
 useEffect(()=>{
  consultaAPI();
 },[])
 //realiza peticiones async=asincronica y se va atardar un tiempo en ejecutarse,  await=esperar, fetch=petisiones
 const consultaAPI=async()=>{
   try {
    //actualizar el state del spinner
    setMostrarSpinner(true)
    const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    //con este metodo lo guardo en dato para mostrar
    const dato = await respuesta.json();
    console.log(dato[0]);
    setPersonaje(dato[0]);
    setTimeout(() => {
      setMostrarSpinner(false)
    }, 2500);
    // actualizar el state de spinner
setMostrarSpinner(false);
    
  } catch (error) {
    console.log(error);
    //mostar un cartel al usuario
    setMostrarSpinner(false);
  }
 }
 //mostrar operador ternario es similar al if ?si :no
 //(condicion logica)? (codigo cuando la condicion es true) : (codigo cuando la condicion es falso)
 const mostrarComponente= (mostrarSpinner === true)? (<div className="d-flex justify-content-center">
 <Spinner></Spinner>
 </div>) : (<Frases personaje={personaje} > </Frases>)

  return (
    < >
    <Container className="my-5 text-center ">
    <img src={simpson} alt="logo Simpson" className="w-100" />
<Button variant="warning" onClick={consultaAPI} >Obtener frases</Button>
    </Container>
    {mostrarComponente}
    </>
    
  );
}

export default App;
