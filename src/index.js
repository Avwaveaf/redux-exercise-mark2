import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//goals action and reducer

// end of goals action and reducer

// todo reducer

//consume store
//getting the state
// store.subscribe(() => {
//   console.log("state changed", store.getState());
// });
// store.dispatch(
//   addTodoActionCreator({
//     id: 1,
//     text: "hello world",
//     isCompleted: false,
//   })
// );
// store.dispatch(
//   addTodoActionCreator({
//     id: 2,
//     text: "Afif Fadillah",
//     isCompleted: false,
//   })
// );
// store.dispatch(
//   deleteTodoActionCreator({
//     id: 1,
//   })
// );
// store.dispatch(
//   addTodoActionCreator({
//     id: 3,
//     text: "this is note 3",
//     isCompleted: false,
//   })
// );
// store.dispatch(toggleTodoActionCreator({ id: 2 }));
// store.dispatch(modifyTodoActionCreator({ id: 2, text: "text sudah diubah" }));

// store.dispatch(
//   addGoalsActionCreator({
//     id: 1,
//     text: "jadi profesional react developer",
//   })
// );
// store.dispatch(
//   addGoalsActionCreator({
//     id: 2,
//     text: "jadi profesional javascript developer",
//   })
// );

// store.dispatch(deleteGoalsActionCreator({ id: 1 }));

// // subscribe when state changed
// // const unsubscribe = store.subscribe(() => {
// //   console.log("state has changed");
// // });
// //unsubscribe

// // unsubscribe();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
