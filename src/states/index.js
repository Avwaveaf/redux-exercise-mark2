import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { applyMiddleware } from "redux";
import { thunk, todoDeletionCheck } from "./middlewares";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, todoDeletionCheck)
);

export { store };
