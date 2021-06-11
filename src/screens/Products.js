import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Searchbar, ActivityIndicator, Chip } from "react-native-paper";
import { ProductCard } from "../components/ProductCard";
import { TagSelect } from "../components/tag-select.component";

import { productService } from "../service/product-service";

export const Products = ({ route, setRoute }) => {
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [categoryOpen, setCategoryOpen] = useState(true);

  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = async (k, c, b) => {
    setIsLoading(true);
    const { response, error } = await productService({
      method: "search",
      data: {
        searchKey: k,
        category: c ? c : "",
        brand: b ? b : "",
      },
    });
    console.log({
      method: "search",
      data: {
        searchKey: k,
        category: c ? c : "",
        brand: b ? b : "",
      },
    });
    if (error) {
      console.log(error);
    }
    if (!response) {
      console.log("no response found.");
    } else if (response.data.success) {
      setProducts([
        ...response.data.trendyol.data,
        ...response.data.gratis.data,
        ...response.data.watsons.data,
      ]);
      setCategories(response.data.watsons.categories);
      setBrands(response.data.watsons.brands);
      setIsLoading(false);
    } else {
      console.log("response success: false");
    }
  };
  // useEffect(() => {
  //   const backAction = () => {
  //     console.log(123);
  //     Alert.alert("Hold on!", "Are you sure you want to go back?", [
  //       {
  //         text: "Cancel",
  //         onPress: () => null,
  //         style: "cancel",
  //       },
  //       { text: "YES", onPress: () => BackHandler.exitApp() },
  //     ]);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );

  //   return () => backHandler.remove();
  // }, []);

  // setTimeout(() => {
  //   setRoute([<ProductDetails />]);
  //   console.log(route);
  // }, 3000);
  // setTimeout(() => {
  //   setRoute([]);
  //   console.log(route);
  // }, 3000);

  // useEffect(() => {
  // getProducts("");
  // }, []);

  // useEffect(() => {
  //   getProducts("", category, brand);
  //   return () => {};
  // }, [category, brand]);

  // const onTagClose = () => {};

  return (
    <View style={styles.container}>
      <View>
        <Searchbar
          style={{ marginLeft: 8, marginRight: 8, marginTop: 8 }}
          placeholder="Search for a product"
          value={keyword}
          onSubmitEditing={() => {
            getProducts(keyword, category, brand);
          }}
          onChangeText={(query) => setKeyword(query)}
        />
      </View>
      {isLoading == null ? null : isLoading ? (
        <View
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            marginLeft: -25,
          }}
        >
          <ActivityIndicator size={50} animating={true} color="violet" />
        </View>
      ) : (
        <View>
          <View
            style={{
              flexDirection: "row",
              // backgroundColor: "green",
              justifyContent: "flex-start",
              margin: 16,
              marginBottom: 0,
            }}
          >
            <Chip
              mode="flat"
              selected={false}
              onPress={() => {
                console.log(categories);
                setCategory("1156");
              }}
              onClose={
                category
                  ? () => {
                      console.log("category close");
                      setCategory("");
                    }
                  : null
              }
            >
              {category ? category : "select category"}
            </Chip>
            <View style={{ paddingLeft: 12 }} />
            <Chip
              mode="flat"
              onPress={() => {
                console.log(123);
                setBrand("476");
              }}
              onClose={
                brand
                  ? () => {
                      console.log("brand close");
                      setBrand("");
                    }
                  : null
              }
            >
              {brand ? brand : "select brand"}
            </Chip>
            {!categoryOpen && (
              <View
                style={{
                  width: "100%",
                  height: 200,
                  backgroundColor: "blue",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              ></View>
            )}
          </View>
          <FlatList
            style={styles.flatList}
            data={products}
            renderItem={({ item }) => {
              return (
                  <ProductCard product={item} />
              );
            }}
            contentContainerStyle={styles.contentContainer}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  flatList: {
    margin: 8,
  },
  contentContainer: {},
});
