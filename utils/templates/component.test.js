module.exports = componentName => ({
  content: `import React from "react";
import { render, screen } from "@testing-library/react";

import ${componentName} from "./";

import { ${componentName}Props } from "./types";

describe("${componentName}", () => {
  let props: ${componentName}Props;
  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });
  
  it("Should render foo text correctly", () => {
    props.foo = "harvey was here";
    render(<${componentName} {...props} />);
    const component = screen.getByTestId("${componentName.toLowerCase()}");
    expect(component).toHaveTextContent("harvey was here");
  });
});
`,
  extension: `.test.tsx`,
});
