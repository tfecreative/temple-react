import React, { RefObject, createRef } from "react";
import { renderHook } from "@testing-library/react-hooks";
import { useOutsideClick, IOutsideClickProps } from "./useOutsideClick";
import { render } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";

const myRef: RefObject<HTMLDivElement> = createRef();
let props: IOutsideClickProps = {
  callback: jest.fn(),
  ref: myRef,
};

const renderTest = () => {
  const { getByTestId } = render(
    <div data-testid="outer-test-container">
      <div data-testid="inner-test-container" ref={myRef} />
    </div>
  );
  const container = getByTestId("outer-test-container");
  const innerContainer = getByTestId("inner-test-container");
  return { getByTestId, container, innerContainer };
};

let outer: any = null;
let inner: any = null;
beforeEach(() => {
  const { container, innerContainer } = renderTest();
  outer = container;
  inner = innerContainer;
  props.callback = jest.fn();
});

describe("useOutsideClick hook", () => {
  it("fires event when outside container is clicked", () => {
    renderHook(() => useOutsideClick(props));
    fireEvent.click(outer);
    expect(props.callback).toHaveBeenCalledTimes(1);
  });

  it("does not fire event when container itself is clicked", () => {
    renderHook(() => useOutsideClick(props));
    fireEvent.click(inner);
    expect(props.callback).toHaveBeenCalledTimes(0);
  });
});
