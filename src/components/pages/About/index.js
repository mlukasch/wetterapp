import React, { Component } from 'react';
import { Well } from 'react-bootstrap';

import { AUTHOR_NAME, AUTHOR_ADDRESS, AUTHOR_MAIL, AUTHOR_PHONE } from '../../../secrets';
import './styles.css';

class About extends Component {
  render() {
    return (
      <div id="page-about">
        <Well id="page-about-info">
          <div>{AUTHOR_NAME}</div>
          <div>{AUTHOR_ADDRESS}</div>
          <div>Email: {AUTHOR_MAIL}</div>
          <div>Mobil: {AUTHOR_PHONE}</div>
        </Well>
      </div>
    );
  }
}

export default About;
