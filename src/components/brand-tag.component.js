import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const BrandTag = ({ brand, setBrand }) => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: "thistle",
        borderRadius: 50,
      }}
      onPress={() => {
        setBrand("476");
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
          Brand{brand && `: ${brand}`}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
