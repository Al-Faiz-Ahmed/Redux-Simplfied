import React from "react";
import ReactRouter from "./Config/reactRouter";
import GlobalReduxStore from "./Redux/redux-store";
function App() {
  return (
    <>
      <GlobalReduxStore>
        <ReactRouter />
      </GlobalReduxStore>
    </>
  );
}

export default App;
