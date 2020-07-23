import React from "react";

  import { StoryWrapper } from 'styles/helpers';


import Link from "./";

export default {
    title: "Link"
};
export const WithBar = () =>  (<StoryWrapper><Link foo="bar" /> </StoryWrapper>);
export const WithBaz = () =>  (<StoryWrapper><Link foo="baz" /> </StoryWrapper>);
  