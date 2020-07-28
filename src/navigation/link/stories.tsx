import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import LinkComponent from './';

export default {
  title: 'Navigation|Link',
};

export const Link = () => (
  <Router>
    <LinkComponent to="/">Link</LinkComponent>
  </Router>
);
