module.exports = componentName => ({
  content: `import React from "react";
import { render } from "@testing-library/react";

import ${componentName} from "./";

import { ${componentName}Props } from "./types";

describe("${componentName}", () => {
  let props: ${componentName}Props;
  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });
  const renderComponent = () => render(<${componentName} {...props} />);
  it("Should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();
    const component = getByTestId("${componentName.toLowerCase()}");
    expect(component).toHaveTextContent("harvey was here");
  });
});
`,
  extension: `.test.tsx`,
});
