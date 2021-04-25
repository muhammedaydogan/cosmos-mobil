import React from "react";
import { StyleSheet, View } from "react-native";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import { registerRootComponent } from "expo";
// import thunk from "redux-thunk";

import { Color } from "./src/util/Config";
import Switch from "./src/screens/Switch";
import rootReducer from "./src/redux/reducers/index.js";

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <View style={classes.root}>
        <Switch />
      </View>
    </Provider>
  );
}

const classes = StyleSheet.create({
  root: {
    backgroundColor: Color.first,
    width: "100%",
    height: "100%",
  },
});
