import React from "react";
import { connect } from "react-redux";

import Login from "./Login.js";
import Dashboard from "./Dashboard";
import { Products } from "./Products.js";
import { SafeArea } from "../components/SafeArea";
import { Feed } from "./Feed.js";

const Switch = (props) => {
  console.log(props);
  const pages = {
    Login: "Login",
    Dashboard: "Dashboard",
    Feed: "Feed",
    Products: "Products",
  };
  const getPage = () => {
    console.log(props.screen);
    switch (props.screen) {
      case pages.Login:
        return <Login />;
      case pages.Dashboard:
        return <Dashboard />;
      case pages.Feed:
        return <Feed />;
      case pages.Products:
        return <Products />;

      default:
        break;
    }
  };

  return <SafeArea>{getPage()}</SafeArea>;
};

export default connect((state) => ({
  screen: state.screens.current,
}))(Switch);
