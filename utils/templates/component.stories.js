module.exports = componentName => ({
  content: `import React from "react";

  import { StoryWrapper } from 'styles/helpers';


import ${componentName} from "./";

export default {
    title: "${componentName}"
};
export const WithBar = () =>  (<StoryWrapper><${componentName} foo="bar" /> </StoryWrapper>);
export const WithBaz = () =>  (<StoryWrapper><${componentName} foo="baz" /> </StoryWrapper>);
  `,
  extension: `stories.tsx`,
});
