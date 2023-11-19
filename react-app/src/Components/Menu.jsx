import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//reaproveitei este componente
function Menu(props) {
  const [mostrarInputs, setMostrarInputs] = useState(false);
  const [home, setHome]=useState(false);

  const toggleInputs = () => {
    setMostrarInputs(true);
    setHome(false);
  };
  const GoHome=()=>{
    setHome(true);
    setMostrarInputs(false);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" onLoad={GoHome} style={{position:"fixed", width:"100%", backgroundColor:"black"}}>
        <Container style={{ display: "flex", justifyContent: "center"}}>
          <Nav className="me-auto">
            <Nav.Link href="#home"><img style={{width:"30px"}}/></Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={GoHome}>Home</Nav.Link>
            <Nav.Link href="#Criação" onClick={toggleInputs}>Criar Personagem</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
