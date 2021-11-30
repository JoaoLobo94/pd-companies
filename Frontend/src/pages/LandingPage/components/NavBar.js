import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LoginModal from "./LoginModal";
import "./NavBar.css";

const IndexNavBar = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="white"
        className="navbar-container"
        sticky="top"
      >
        <Navbar.Brand href="#home">Decentralize Your Work</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#deets">DYW</Nav.Link>
            <Nav.Link href="#deets">Participate</Nav.Link>
          </Nav>
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link
              id="user-area"
              onClick={() => setModalShow(true)}
            >
              User area
            </Nav.Link>
            <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default IndexNavBar;
