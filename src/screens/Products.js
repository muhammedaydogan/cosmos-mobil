import React from "react";
import axios from "axios";
import { FlatList, StyleSheet, Text } from "react-native";

export const Products = () => {
  return (
    <>
      <FlatList style={styles.flatList} />
      {/* <Text style={styles.text}>SELAM</Text> */}
    </>
  );
};

const styles = StyleSheet.create({
  text: { flex: 1, color: "green", justifyContent: "center", fontSize: 16 },
  flatList: { flex: 1, color: "orange" },
});
