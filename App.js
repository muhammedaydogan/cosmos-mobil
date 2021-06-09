import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./src/redux/reducers/index.js";
import Cosmos from './src/Cosmos'
const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Cosmos />
    </Provider>
  );
} 


