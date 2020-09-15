import React from "react";
import { render } from "@testing-library/react";
import { Button } from "./Button";
import { Props } from "./Button";


const defaultProps: Props = {
  id: "testbutton",
  theme: "primary",
  onClick: jest.fn(),
  disabled: false,
};

test("button renders", () => {
  const { getByText } = render(<Button {...defaultProps}>Test Button</Button>);
  expect(getByText("Test Button")).toBeTruthy();
});
