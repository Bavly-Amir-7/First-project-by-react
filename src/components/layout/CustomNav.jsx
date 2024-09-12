import React, { useState } from 'react';
import { Container, Form, Nav, Navbar, NavDropdown, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import shopTitle from "../../assets/images/imgs/SHOP.CO.png";
import { FaSun, FaMoon } from 'react-icons/fa';

function CustomNav() {
  const [darkMode, setDarkMode] = useState(false);
  const [modalShow, setModalShow] = useState(false); // State for modal visibility

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const handleShow = () => setModalShow(true); // Show modal
  const handleClose = () => setModalShow(false); // Close modal

  return (
    <>
      <div className="navHeader text-center">
        Sign up and get 20% off to your first order.
        <a className='text-white navSign' href="#first_name">Sign up for now</a>
      </div>

      <Navbar expand="lg" className="navParent">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Link to="/">
            <img className='webTitle' src={shopTitle} alt="Site title" />
          </Link>
          <div className='navStyle '>
            <Navbar.Collapse className='nav-styles' id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0 navQuery" style={{ maxHeight: '100px' }} navbarScroll>
                <NavDropdown title="shop" id="navbarScrollingDropdown " className='ddd'>
                  <NavDropdown.Item as={Link} to="/men">Men</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/anotherpage">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/somethingelse">Something else here</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/casual">On Sale</Nav.Link>
                <Nav.Link as={Link} to="/cards3">New Arrivals</Nav.Link>
                <Nav.Link as={Link} to="/brands">Brands</Nav.Link>
              </Nav>
              <Form className="d-flex searchBar">
                <div className="inputWrapper">
                  <i className="fa-solid fa-magnifying-glass icon"></i>
                  <Form.Control
                    id='searchBar'
                    type="search"
                    placeholder="Search for products..."
                    className="formSearch"
                    aria-label="Search"
                  />
                </div>
              </Form>
            </Navbar.Collapse>
            <div className="icon-container">
              <a href="#" className="icon1" onClick={handleShow}> {/* Open modal on click */}
                <i className="fa-solid fa-magnifying-glass iconSearch"></i>
              </a>
              <Link to="/brands" className="icon1">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </Link>
              <Link to="/profile" className="icon2">
                <i className="fa fa-user" aria-hidden="true"></i>
              </Link>
              {/* <button className="theme-toggle themeMode" onClick={toggleDarkMode}>
                {darkMode ? <FaSun style={{ color: '#232323' }} /> : <FaMoon style={{ color: '#666666' }} />}
              </button> */}
            </div>
          </div>
        </Container>
      </Navbar>

      {/* Modal for search */}
      <Modal show={modalShow} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              type="search"
              placeholder="Search for products..."
              aria-label="Search"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomNav;
