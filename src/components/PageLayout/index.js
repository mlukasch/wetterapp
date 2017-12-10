import React, { Component } from 'react';
import { Navbar, NavItem, Grid, Nav, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './styles.css';

class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect id="page-layout-header">
          <Navbar.Header>
            <Navbar.Brand>
              <NavLink to="/">Weather App</NavLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem>
                <NavLink to="/about">About</NavLink>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid>
          <Row className="show-grid">
            <Col>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Layout;
