import { createBrowserHistory } from "history";
import configureStore from "store/store.config";
import { sagaMiddleware } from "store/middleware";
import { rootSaga } from "store/sagas";

export const history = createBrowserHistory();

const initialState: any = {};

const store = configureStore(history, initialState);
sagaMiddleware.run(rootSaga);

export { store }
