import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import shopTitle from "../src/images/SHOP.CO.png"

function CustomNav() {
  return (
    <>
      <div className="navHeader text-center">Sign up and get 20% off to your first order. <a className='text-white navSign' href="#first_name" >Sign up for now</a> </div>

      <Navbar expand="lg" className="navParent">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Link to="/">
            <img className='webTitle' src={shopTitle} alt="Site title" />
          </Link>
          <div className='navStyle d-flex'>
            <Navbar.Collapse className='nav-styles' id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                <NavDropdown title="shop" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to="/men">Men</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/anotherpage">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/somethingelse">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/">On Sale</Nav.Link>
                <Nav.Link as={Link} to="/about">New Arrivals</Nav.Link>
                <Nav.Link as={Link} to="/brands">Brands</Nav.Link>
              </Nav>
              <Form className="d-flex searchBar">
                <div className="inputWrapper">
                  <i className="fa-solid fa-magnifying-glass icon"></i>
                  <Form.Control
                    type="search"
                    placeholder="Search for products..."
                    className="formSearch"
                    aria-label="Search"
                  />
                </div>
              </Form>

              <div className="icon-container">
                <a href="/cart" className="icon1">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </a>
                <a href="/profile" className="icon2">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </a>
              </div>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNav;
