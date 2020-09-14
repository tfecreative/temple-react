import React from "react";

import { render } from "@testing-library/react";
import { Modal, IModalProps } from "components/Modal";

let defaultProps: IModalProps = {
  id: "test-modal",
  open: true,
  children: <div>test modal</div>,
};

const renderTest = () => {
  const { container, getByTestId } = render(<Modal {...defaultProps}></Modal>);
  return { container, getByTestId };
};

describe("Modal", () => {
  it("renders correctly", () => {
    const { container, getByTestId } = renderTest();
    const modal = getByTestId("modal");
    expect(modal).toHaveClass("modal");
    expect(modal).toBeVisible();
    expect(container.children).toHaveLength(1);
  });

  it("has no visible children when closed", () => {
    defaultProps.open = false;
    const { container } = renderTest();
    expect(container.children).toHaveLength(0);
  });
});
