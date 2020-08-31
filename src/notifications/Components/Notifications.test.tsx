import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { Notifications } from "notifications/Components/Notifications";
import configureStore from "store/store.config";
import { createMemoryHistory } from "history";

const history = createMemoryHistory();
const initialState: any = {
  notifications: {
    notifications: [
      {
        id: "notification-1",
        message: "Test notification",
      },
      {
        id: "notification-2",
        message: "Another test notification",
      },
    ],
  },
};
const store = configureStore(history, initialState);

describe("Notifications", () => {
  it("shows notification", () => {
    const { container } = render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );
    const notificationOne = container.querySelector('[id="notification-1"]');
    expect(notificationOne).toHaveClass("notification");
  });
});
