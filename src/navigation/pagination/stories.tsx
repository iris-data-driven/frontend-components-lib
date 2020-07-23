import React from "react";

  import { StoryWrapper } from 'styles/helpers';


import Pagination from "./";

export default {
    title: "Pagination"
};
export const WithBar = () =>  (<StoryWrapper><Pagination foo="bar" /> </StoryWrapper>);
export const WithBaz = () =>  (<StoryWrapper><Pagination foo="baz" /> </StoryWrapper>);
  