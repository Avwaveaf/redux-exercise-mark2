import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { applyMiddleware } from "redux";
import { todoDeletionCheck } from "./middlewares";

const store = createStore(rootReducer, applyMiddleware(todoDeletionCheck));

export { store };
