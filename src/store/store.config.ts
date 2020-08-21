import { Store, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import { History } from "history";
import { ApplicationState, createRootReducer } from "store";

export default function configureStore(
  history: History,
  initialState: ApplicationState
): Store<ApplicationState> {
  // const store = createStore(
  //   createRootReducer(history),
  //   initialState,
  //   applyMiddleware(routerMiddleware(history), thunk)
  // );
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
  );
  /* eslint-enable */
  return store;
}
