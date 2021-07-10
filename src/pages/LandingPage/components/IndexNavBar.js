import LoginCard from "../../../components/Cards/LoginCard";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./IndexNavBar.css";

const IndexNavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar-container" sticky="top">
        <Navbar.Brand href="#home">Decentralize Your Work</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#deets">What is DYW</Nav.Link>
            <Nav.Link href="#deets">How do you participate</Nav.Link>
          </Nav>
          <Nav id='user-area'>
            <Nav.Link eventKey="link" href="#memes">User area</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <LoginCard />
    </div>
  );
};
export default IndexNavBar;
