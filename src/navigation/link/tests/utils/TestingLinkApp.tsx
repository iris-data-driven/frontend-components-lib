import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import Link from '../..';

import { TestingLinkAppProps } from './types';

const About = () => <h1>You are on the about page</h1>;
const Home = () => <h1>You are home</h1>;

const TestingLinkApp: FC<TestingLinkAppProps> = ({ text }) => (
  <div>
    <Link to="/about">{text}</Link>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </div>
);

export default TestingLinkApp;
