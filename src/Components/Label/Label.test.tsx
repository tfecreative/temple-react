import React from "react";
import { render } from "@testing-library/react";
import { Label } from "Components/Label/Label";
import { Props } from "Components/Label/Label";


const defaultProps: Props = {
  id: 'test-label'
};

test("label renders", () => {
  const { getByText } = render(<Label {...defaultProps}>test label</Label>);
  expect(getByText("test label")).toBeTruthy();
});
