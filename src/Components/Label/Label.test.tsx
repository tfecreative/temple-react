import React from "react";
import { render } from "@testing-library/react";
import Label from "./Label";
import { Props } from "./Label";


const defaultProps: Props = {
  htmlFor: 'testing'
};

test("label renders", () => {
  const { getByText } = render(<Label {...defaultProps}>hoya there</Label>);
  expect(getByText("hoya there")).toBeTruthy();
});
