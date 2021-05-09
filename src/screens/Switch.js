import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Login from "./Login.js";
import Dashboard from "./Dashboard";
import { Products } from "./Products.js";
import { SafeArea } from "../components/safe-area.component";
import { Feed } from "./Feed.js";
import { ProductDetails } from "./ProductDetails.js";

const Switch = (props) => {
  console.log(props);
  const pages = {
    Login: "Login",
    Dashboard: "Dashboard",
    Feed: "Feed",
    Products: "Products",
    ProductDetails: "ProductDetails",
  };
  const [productsStack, setProductsStack] = useState([]);
  const removeFromStact = () => {
    setProductsStack(
      productsStack.filter((item, i) => i !== productsStack.length - 1)
    );
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
        // if (productsStack.length > 0) {
        // return productsStack[productsStack.length - 1];
        // } else {
        return <Products route={productsStack} setRoute={setProductsStack} />;
      // }
      case pages.ProductDetails:
        return (
          <ProductDetails
            product={{
              product: {
                brand: "Makeuptime",
                currency: "TL",
                freeShipping: false,
                imageLinks: [
                  "https://cdn.dsmcdn.com//ty105/product/media/images/20210420/20/81703143/70739699/1/1_org.jpg",
                ],
                name: "Miss Galina Matte Ruj Seti 6&#x27;lı",
                price: 18,
                website: "trendyol",
              },
            }}
          />
        );

      default:
        break;
    }
  };

  return (
    <SafeArea>
      <View
        style={{
          flex: 1,
          diplay: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              color: "violet",
              paddingLeft: 6,
              paddingRight: 6,
              textShadowColor: "#585858",
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 2,
            }}
          >
            Cosmos
          </Text>
        </View>

        <View style={{ backgroundColor: "thistle", height: 0.3 }}></View>

        <View style={{ flexGrow: 1, marginBottom: 56 }}>{getPage()}</View>
        <View style={{ height: 45 }}></View>

        <View style={{ backgroundColor: "grey", height: 0.5 }}></View>

        <View
          style={{
            height: 50,
            marginTop: "auto",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Ionicons name="home" size={26} color="black" />
          <Ionicons name="search" size={26} color="black" />
          <Ionicons name="add" size={26} color="black" />
          <Ionicons name="gift" size={26} color="black" />
          <Ionicons name="person" size={26} color="black" />
        </View>
      </View>
    </SafeArea>
  );
};

export default connect((state) => ({
  screen: state.screens.current,
}))(Switch);
