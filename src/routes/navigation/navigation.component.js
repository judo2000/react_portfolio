import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";

import Header from "../../components/header/header.component";
import "./navigation.styles.css";

const Navigation = () => {
  return (
    <Fragment>
      <Nav className="navbar navbar-expand-md nav_style sticky-top">
        <Container className="container">
          <button
            className="navbar-toggler navbar-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon white-text"></span>
          </button>
          <Nav className="collapse navbar-collapse" id="navbarSupportedContent">
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
