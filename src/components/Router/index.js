import React, { Component } from 'react';

import connect from './connector';

const Test = (props) => (<div>
  {props.test.data}
  <button type="button" onClick={() => props.actions.test()}>Test</button>
</div>);

export default connect(Test);
