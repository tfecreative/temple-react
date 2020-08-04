import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";
import { Props } from "./Button";

const defaultProps: Props = {
  theme: "primary",
  onClick: jest.fn(),
};

test("button renders with terrible pun", () => {
  const { getByText } = render(<Button {...defaultProps}>hoya there</Button>);
  expect(getByText("hoya there")).toBeTruthy();
});
