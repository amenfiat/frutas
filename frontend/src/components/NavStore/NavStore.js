import React, { useState } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StorefrontIcon from "@mui/icons-material/Storefront";
import { useStateValue } from "../../store/StateProvider/StateProvider";
import "./NavStore.css";

import { NavBar } from "../NavBar/NavBar";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import Search from "../search/search";

const NavStore = () => {
  const [{ basket }] = useStateValue();
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="header">
        <Container className="nav__color">
          <div className="header__logo">
            <StorefrontIcon className="header__logoImage" fontSize="large" />
            <Link to="/" className="header__logoTitle">
              <h3>Frutas Exóticas</h3>
            </Link>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav__color">
              <div className="header__search">
                <Search
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              </div>
              <div className="header__nav">
                <div className="nav__item">
                  <span className="nav__itemLineOne">Hello Guest</span>
                  <span className="nav__itemLineTwo">Sign In</span>
                </div>
                <div className="nav__item">
                  <span className="nav__itemLineOne">Your</span>
                  <span className="nav__itemLineTwo">Shop</span>
                </div>
                <Link
                  to="/checkout"
                  style={{ textDecoration: "none" }}
                  className="nav__itemBasket"
                >
                  <AddShoppingCartIcon />
                  <span className="nav__itemLineTwo nav__basketCount">
                    {basket.length}
                  </span>
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <NavBar />
    </>
  );
};

export { NavStore };