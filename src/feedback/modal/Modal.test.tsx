import React from "react";
import { render, screen } from "@testing-library/react";

import Modal from "./";

import { ModalProps } from "./types";

describe("Modal", () => {
  let props: ModalProps;
  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });
  
  it("Should render foo text correctly", () => {
    props.foo = "harvey was here";
    render(<Modal {...props} />);
    const component = screen.getByTestId("modal");
    expect(component).toHaveTextContent("harvey was here");
  });
});
