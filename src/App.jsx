
import Frases from "./componente/Frases";
import {Container, Button} from "react-bootstrap";
import {useEffect, useState} from 'react';

function App() {
 const [personaje, setPersonaje] = useState({});
 //ciclo de vida
 useEffect(()=>{
  consultaAPI();
 },[])
 //realiza peticiones async=asincronica y se va atardar un tiempo en ejecutarse,  await=esperar, fetch=petisiones
 const consultaAPI=async()=>{
   try {
    const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    //con este metodo lo guardo en dato para mostrar
    const dato = await respuesta.json();
    console.log(dato[0]);
    setPersonaje(dato[0]);
    
  } catch (error) {
    console.log(error);
    //mostar un cartel al usuario
    
  }
 }

  return (
    < >
    <Container className="my-5 text-center bg-danger">
    <img src="https://trello.com/1/cards/6328e276517f8e0208590f76/attachments/632b8843a474c100700e1cfb/previews/632b8844a474c100700e1d03/download/image.png" alt="logo de los simpson" className="w-100" />
<Button variant="warning" >Obtener frases</Button>
    </Container>
    <Frases personaje={personaje} > </Frases>
    </>
    
  );
}

export default App;
