import React, { Component } from 'react';
import { Row, Grid, Col, Button } from 'react-bootstrap';

import './styles.css';

class PageFooter extends Component {
  render() {
    return (
      <Grid id="page-footer">
        <Row>
          <Grid>
            <Row>
              <Col id="page-footer-links">
                <Button bsSize="lg">
                  <i className="fa fa-copyright" aria-hidden="true"></i>&nbsp;
                  Impressum
                </Button>
              </Col>
            </Row>
          </Grid>
        </Row>
      </Grid>
    );
  }
}

export default PageFooter;
