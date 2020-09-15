import { Store, createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import { History } from "history";
import { createRootReducer } from "store/reducers";
import { sagaMiddleware } from "store/middleware";
import { IAppState } from "store/types";

export default function configureStore(
  history: History,
  initialState: IAppState
): Store<IAppState> {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );
  return store;
}
