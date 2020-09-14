import React from "react";
import { render } from "@testing-library/react";
import App, { MainProps } from "./App";
import { store, history } from "store";

const props: MainProps = {
  store,
  history,
};

test("renders learn react link", () => {
  const { container } = render(<App {...props} />);
  const siteContainer = container.querySelector(".site-content");
  expect(siteContainer).toBeInTheDocument();
});
