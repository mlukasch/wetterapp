import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './styles.css';

class PageHeader extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect id="page-header">
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to="/">
              <i className="fa fa-umbrella" aria-hidden="true" />&nbsp;
                Weather App
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={2} href="/about">About</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default PageHeader;
