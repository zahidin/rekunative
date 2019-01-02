import { createStore, applyMiddleware } from "redux";
import appReducer from './reducers';
import middleware from './middlewares';

const store = createStore(
    appReducer,
    applyMiddleware(middleware),
);

export default store
  