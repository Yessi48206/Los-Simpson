
import Frases from "./componente/Frases";
import {Container, Button} from "react-bootstrap";

function App() {
  return (
    < >
    <Container className="my-5 text-center bg-danger">
    <img src="https://trello.com/1/cards/6328e276517f8e0208590f76/attachments/632b8843a474c100700e1cfb/previews/632b8844a474c100700e1d03/download/image.png" alt="logo de los simpson" className="w-100" />
<Button variant="warning" >Obtener frases</Button>
    </Container>
    <Frases > </Frases>
    </>
    
  );
}

export default App;
