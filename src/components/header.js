// src/components/Header.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">BOT MOVIES</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Trang chủ</Nav.Link>
          <Nav.Link as={Link} to="/chatbot">ChatBot</Nav.Link>
          <Nav.Link as={Link} to="/history">Lịch Sử Đặt Vé</Nav.Link>
          <Nav.Link as={Link} to="/about">Về Chúng Tôi</Nav.Link>
          <Nav.Link as={Link} to="/account">Tài Khoản</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
