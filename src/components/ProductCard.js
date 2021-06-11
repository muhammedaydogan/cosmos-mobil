import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { Card, TouchableRipple } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, connect} from 'react-redux'

export const ProductCard = (props) => {
  const dispatch = useDispatch()
  if (!props.product.name) {
    console.log("*************");
    return null;
  }

  const {
    name,
    brand,
    price,
    currency,
    website,
    freeShipping,
    imageLinks,
  } = props.product;

  const { onItemClick } = props;

  // console.log(imageLinks);
  // console.log(">");

  const rating = Math.floor(Math.random() * 50) / 10;
  const ratingArray = Array.from(new Array(5));

  // console.log(imageLinks[0]);

  return (
    <TouchableRipple
      onPress={() => {
        // onItemClick(<ProductDetails />);
        
        dispatch({
          type: "CHANGE_SCREEN",
          product: props.product,
        });
        console.log('sea');
      }}
    >
      <View style={{ margin: 8 }}>
        <Card elevation={5}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
              }}
            >
              <Card.Cover
                key={name}
                // ! bunu orange yapinca cikan orangelar yok edilmeli
                style={{ backgroundColor: "transparent" }}
                source={{ uri: imageLinks[0] }}
                resizeMode="contain"
                alt={imageLinks[0]}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                padding: 12,
                justifyContent: "center",
              }}
            >
              <View key={"name"} style={{ flex: 1 }}>
                <Text
                  stlye={{
                    color: "yellow",
                    textAlign: "left",
                    alignContent: "center",
                  }}
                >
                  {name ? name : "fsa"}
                </Text>
              </View>
              <View key={"brand"} style={{ flex: 1 }}>
                <Text
                  style={{
                    color: "black",
                    textAlign: "left",
                    alignContent: "center",
                  }}
                >
                  {brand ? brand : "asd"} -{" "}
                  {<Text style={{ color: "dimgray" }}>{website}</Text>}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flexDirection: "row",
                    // justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  {ratingArray.map((e, i) => (
                    <Ionicons
                      key={`${name}-${i}`}
                      name="star"
                      color={i < Math.round(rating) ? "orange" : "darkgray"}
                    />
                  ))}
                  <Text
                    key={"asd"}
                    style={{
                      flex: 1,
                      fontSize: 10,
                      paddingLeft: 4,
                      color: "gray",
                      textAlign: "left",
                    }}
                  >
                    ({rating})
                  </Text>
                  <Text
                    key={"qwe"}
                    style={{
                      flex: 1,
                      color: "black",
                    }}
                  >
                    {price ? price : "asd"}TL
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Card>
      </View>
    </TouchableRipple>
  );

  //   return (
  //     <View style={styles.container}>
  //       <Card style={styles.card} elevation={5}>
  //         <Image
  //           style={{
  //             width: 200,
  //             height: 200,
  //             backgroundColor: "darkturquoise",
  //             justifyContent: "space",
  //           }}
  //           key={name}
  //           source={{ uri: imageLinks[0] }}
  //           resizeMode={"contain"}
  //         />
  //         <Text style={styles.infoContainer}>123</Text>
  //       </Card>
  //     </View>
  //   );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingBottom: 8 },
  card: { flex: 3, color: "white", margin: 16 },
  productItem: {
    backgroundColor: "violet",
    padding: 4,
    margin: 6,
    marginBottom: 16,
    fontSize: 14,
    flex: 1,
  },
});
