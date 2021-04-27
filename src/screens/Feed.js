import React from "react";
import { StyleSheet } from "react-native";

import { Text } from "react-native";

export const Feed = () => {
  return (
    <Text style={styles.derp}>
      SELAMSELAMSELAMSELAMSELAMSELAMSELAMSELAMSELAMSELAMSELAMSELAMSELAMSELAMSELAMSELAMSELAMSELAM
    </Text>
  );
};

const styles = StyleSheet.create({
  derp: {
    flex: 1,
    color: "green",
    justifyContent: "center",
    fontSize: 16,
  },
});
