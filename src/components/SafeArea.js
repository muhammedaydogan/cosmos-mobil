import React from "react";
import { Platform, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import styled from "styled-components";

const isAndroid = Platform.OS === "android";

// export const SafeArea = styled(SafeAreaView)`
//   flex: 1;
//   margin-top: ${!isAndroid ? StatusBar.currentHeight : 0}px;

//   /* Andrei Approach: Only set it if currentHeight exists: */
//   /* ${StatusBar.currentHeight &&
//   `margin-top: ${StatusBar.currentHeight}px;`} */
// `;

export const SafeArea = (props) => {
  return (
    <SafeAreaView
      style={{ flex: 1, marginTop: isAndroid ? StatusBar.currentHeight : 0 }}
      {...props}
    >
      {/* {props.children} */}
    </SafeAreaView>
  );
};
