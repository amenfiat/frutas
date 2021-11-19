import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="bg-secondary leal"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto navi">
              <li className="nav-item">
                <Link to="/mision" className="leal">
                  Mision
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tienda" className="leal">
                  Tienda
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/conocenos" className="leal">
                  Conócenos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contacto" className="leal">
                  Contacto
                </Link>
              </li>
            </Nav>
            <div className="item">
              <InstagramIcon />
            </div>
            <div className="item">
              <FacebookIcon />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export { NavBar };

/*

<li className="navbar-brand selected nav-link">
            <Link to="/" className="nav-link">Frutas Exóticas</Link>
          </li>

<div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link to="/mision" className="nav-link">Mision</Link>
              </li>
              <li className="nav-item">
              <Link to="/tienda" className="nav-link">Tienda</Link>
              </li>
              <li className="nav-item">
              <Link to="/conocenos" className="nav-link">Conócenos</Link>
              </li>
              <li className="nav-item">
              <Link to="/contacto" className="nav-link">Contacto</Link>
              </li>
            </ul>
          </div>





*/
