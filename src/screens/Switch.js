import { StatusBar } from "expo-status-bar";
import React from "react";
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from "react-native";
import Login from "./Login.js";
import Dashboard from "./Dashboard";



const Switch = (props) => {
  const pages = {
    Login: "Login",
    Dashboard: "Dashboard",
    Feed: "Feed",
  };
  const [currentPage, setCurrentPage] = React.useState(pages.Login);
  const getPage = () => {
      console.log(props.screen)
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

      default:

        break;
    }
  };
  return (
      <>{getPage()}</>
  );
}

export default connect(state=>({
    screen: state.screens.current 
}))(Switch);
