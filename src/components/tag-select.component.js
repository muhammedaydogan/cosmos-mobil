import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TouchableRipple } from "react-native-paper";

export const TagSelect = ({ title, state, setState }) => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: "violet",
        borderRadius: 50,
        borderStyle: "dotted",
      }}
      onPress={() => {
        if (state != null && state.length > 0) {
          setState("");
        } else setState("109451");
      }}
    >
      <View
        style={{
          padding: 4,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "black",
          }}
        >
          {state ? state : "select " + title}
          {state && (
            <Text
              style={{
                fontWeight: "bold",
                alignItems: "flex-start",
                color: "gray",
              }}
            >
              {" "}
              X
            </Text>
          )}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
