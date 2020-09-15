import React from "react";
import { render } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import { Menu, IMenuProps, MenuItem, MenuHeader } from "components/Menu";

const onMenuItem1Click = jest.fn();
const onMenuItem2Click = jest.fn();

const defaultProps: IMenuProps = {
  children: (
    <>
      <MenuHeader text="Menu Header" />
      <MenuItem id="1" text="Menu Item 1" onClick={onMenuItem1Click} />
      <MenuItem id="2" text="Menu Item 2" onClick={onMenuItem2Click} />
    </>
  ),
};

const renderTest = () => {
  const { getByTestId } = render(<Menu {...defaultProps} />);
  const container = getByTestId("menu");
  return { getByTestId, container };
};

describe("Menu", () => {
  it("renders correctly", () => {
    const { container } = renderTest();
    expect(container).toHaveClass("menu");
  });

  it("renders all menu items", () => {
    const { getByTestId } = renderTest();
    const menuList = getByTestId("menu-list");
    expect(menuList.children.length).toBe(3);
  });

  it("fires correct menu item click events", () => {
    const { getByTestId } = renderTest();
    const menuItem1 = getByTestId("menu-item-1");
    fireEvent.click(menuItem1);
    expect(onMenuItem1Click).toHaveBeenCalledTimes(1);
    expect(onMenuItem2Click).toHaveBeenCalledTimes(0);

    const menuItem2 = getByTestId("menu-item-2");
    fireEvent.click(menuItem2);
    expect(onMenuItem2Click).toHaveBeenCalledTimes(1);
  });
});
