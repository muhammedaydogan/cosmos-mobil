import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { View, Dimensions } from "react-native";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Login from "./Login.js";
import Dashboard from "./Dashboard";
import {Profile} from "./Profile";
import { Products } from "./Products.js";
import {CreatePost}  from "./CreatePost.js";
import { SafeArea } from "../components/safe-area.component";
import { Feed } from "./Feed.js";
import ProductDetails  from "./ProductDetails.js";

const classes = {
  root:{
    width:'100%',
    height:500,
  }
}
const Switch = (props) => {
  // const height = 200;
  const height = (Dimensions.get('screen').height /12 )*9;
  console.log(props);
  const pages = {
    Login: "Login",
    Dashboard: "Dashboard",
    Feed: "Feed",
    Profile: "Profile",
    Products: "Products",
    ProductDetails: "ProductDetails",
    CreatePost: "CreatePost",
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
      case pages.CreatePost:
        return <CreatePost />;
      case pages.Dashboard:
        return <Dashboard />;
      case pages.Profile:
        return <Profile />;
      case pages.Feed:
        return <Feed />;
      case pages.Products:
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
      case pages.CreatePost:
        return <CreatePost />;
      default:
        break;
    }
  };
  return <View style={[classes.root
    ,{height}
  ]}>{getPage()}</ View>;
};

export default connect((state) => ({
  screen: state.screens.current,
}))(Switch);
