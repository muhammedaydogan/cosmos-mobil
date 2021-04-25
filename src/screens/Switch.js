import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";

import Login from "./Login.js";
import Dashboard from "./Dashboard";
import { Products } from "./Products.js";
import { SafeArea } from "../components/SafeArea";

const Switch = (props) => {
  console.log(props);
  const pages = {
    Login: "Login",
    Dashboard: "Dashboard",
    Feed: "Feed",
    Products: "Products",
  };
  const [currentPage, setCurrentPage] = useState(pages.Home);
  const getPage = () => {
    console.log(props.screen);
    switch (props.screen) {
      case pages.Login:
        return <Login />;
        break;
      case pages.Dashboard:
        return <Dashboard />;
        break;
      case pages.Feed:
        return <Feed />;
        break;
      case pages.Products:
        return <Products />;
        break;

      default:
        break;
    }
  };

  const isAndroid = Platform.OS === "android";
  return <SafeArea>{getPage()}</SafeArea>;
};

export default connect((state) => ({
  screen: state.screens.current,
}))(Switch);
