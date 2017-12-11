import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './styles.css';

class PageHeader extends Component {
  render() {
    return (
      <Navbar inverse id="page-header">
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to="/">
              <i className="fa fa-umbrella" aria-hidden="true"/>&nbsp;
              Weather App
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem href="/about" eventKey={1}>About</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default PageHeader;
