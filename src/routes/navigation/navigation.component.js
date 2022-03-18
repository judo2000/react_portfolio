import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

import Header from "../../components/header/header.component";
import "./navigation.styles.css";

const Navigation = () => {
  return (
    <Fragment>
      <Nav class="navbar navbar-expand-md nav_style sticky-top">
        <Container class="container">
          <button
            class="navbar-toggler navbar-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon white-text"></span>
          </button>
          <Nav
            className="me-auto"
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/work">My Work</Nav.Link>
            <Nav.Link href="/contact">Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Nav>
      <Header />
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
