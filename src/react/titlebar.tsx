import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {BsXLg} from "react-icons/bs"

function TitleBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Note-Taking</Navbar.Brand>
        <BsXLg/>
        
      </Container>
    </Navbar>
  );
}

export default TitleBar;