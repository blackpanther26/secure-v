import React, { useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
function BasicExample() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onscroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const onUpdateActiveLink =(value)=>{
    setActiveLink(value);
  }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home" className="fw-bolder fs-2 text-reset">
          {/* <img src={""} alt="Logo" /> */}
          SECURE V
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#Add password"
              className={
                activeLink === "Add password"
                  ? "active-navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Add password")}
            >
              Add password
            </Nav.Link>
            <Nav.Link
              href="#Update password"
              className={ 
                activeLink === "Update password"
                  ? "active-navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Update password")}
            >
              Update password
            </Nav.Link>
            <Nav.Link
              href="#Display password"
              className={
                activeLink === "Display password"
                  ? "active-navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Display password")}
            >
              Display password
            </Nav.Link>
            <Nav.Link
              href="#Generate Password"
              className={
                activeLink === "Generate Password"
                  ? "active-navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Generate Password")}
            >
              Generate Password
            </Nav.Link>
            {isAuthenticated && <p className="mx-3 my-2">{user.name}</p>}
            {isAuthenticated ? (
              <button
                type="button"
                className="btn btn-dark"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
