import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

import Header from "../../components/header/header.component";
import "./navigation.styles.css";

const Navigation = () => {
  return (
    <Fragment>
      <Nav class="navbar navbar-expand-lg nav_style sticky-top">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/work">My Work</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Nav>
      <Header />
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
