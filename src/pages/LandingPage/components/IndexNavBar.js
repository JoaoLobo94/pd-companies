import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LoginModal from "./LoginModal";
import "./IndexNavBar.css";

const IndexNavBar = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="navbar-container"
        sticky="top"
      >
        <Navbar.Brand href="#home">Decentralize Your Work</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#deets">DYC</Nav.Link>
            <Nav.Link href="#deets">Participate</Nav.Link>
          </Nav>
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link
              id="user-area"
              onClick={() => setModalShow(true)}
              href="#memes"
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
