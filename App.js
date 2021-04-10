import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login.js";
import { Color } from "./util/Config";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import { registerRootComponent } from "expo";
import rootReducer from './redux/reducers'
import Switch from './screens/Switch'

const store = createStore(rootReducer);

export default function App() {
  const pages = {
    Login: "Login",
    Home: "Home",
  };
  const [currentPage, setCurrentPage] = React.useState(pages.Login);
  const getPage = () => {
    switch (currentPage) {
      case pages.Login:
        return <Login />;
        break;
      case pages.Home:
        return <Text>Homeeeeeee</Text >;
        break;

      default:

        break;
    }
  };
  return (
    <Provider store={store}>
      <View style={classes.root}><Switch/></View>
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
registerRootComponent(App);
