import { ReactNode } from 'react';
import {Button, Navbar, Container, ButtonGroup} from 'react-bootstrap';
import {BsArrowsAngleContract, BsSquare, BsXLg} from 'react-icons/bs';
import './titlebar.css';

type TitlebarButtonProps = {
  message: 'minimizeApp' | 'maximizeApp' | 'closeApp';
  children: ReactNode;
};

function TitlebarButton({ message, children }: TitlebarButtonProps) {
  return (
    <Button variant=""
      onClick={() => {
        window.electron.ipcRenderer.sendMessage(message, [message]);
      }}
    >
      {/* children would be one of your icons */}
      {children}
    </Button>
  );
}

export default function TitleBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>NOTE TAKING</Navbar.Brand>
        <ButtonGroup>
          <TitlebarButton message="minimizeApp"><BsArrowsAngleContract/></TitlebarButton>
          <TitlebarButton message="maximizeApp"><BsSquare/></TitlebarButton>
          <TitlebarButton message="closeApp"><BsXLg/></TitlebarButton>
        </ButtonGroup>
      </Container>
    </Navbar>
  );
}
