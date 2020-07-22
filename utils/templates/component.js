module.exports = componentName => ({
  content: `import React, { FC } from 'react';

import { Wrapper } from "./styles"

import { ${componentName}Props } from "./types";

const ${componentName}: FC<${componentName}Props> = ({ foo }) => (
    <Wrapper data-testid="${componentName.toLowerCase()}">{foo}</Wrapper>
);
export default ${componentName};
`,
  extension: `index.tsx`,
});
