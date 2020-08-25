import React from "react";
import { render } from "@testing-library/react";
import App, { MainProps } from "./App";
import configureStore from "store/store.config";
import { createMemoryHistory } from "history";

const history = createMemoryHistory();
const initialState: any = {};
const store = configureStore(history, initialState);

const props: MainProps = {
  store,
  history,
};

test("renders learn react link", () => {
  const { container } = render(<App {...props} />);
  const siteContainer = container.querySelector(".site-content");
  expect(siteContainer).toBeInTheDocument();
});
