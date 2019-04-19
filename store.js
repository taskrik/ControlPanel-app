import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import reducer from "./src/reducers/index";

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f; 

const enhancer = compose(
  applyMiddleware(ReduxThunk),
  devTools
);

const store = createStore(reducer, enhancer);

export default store;
