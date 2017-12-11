import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Snackbar } from 'react-redux-snackbar';
import PropTypes from 'proptypes';

import PageHeader from './components/PageHeader';
import PageFooter from './components/Footer';
import './styles.css';


class Layout extends Component {
  render() {
    return (
      <div id="page-layout">
        <Snackbar />
        <PageHeader />
        <Grid id="page-layout-content">
          <Row className="show-grid">
            <Col>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
        <PageFooter />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
