import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

import { productService } from "../service/product-service";

export const Products = () => {
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);

  const getProducts = async (searchKey) => {
    const { data } = await productService({
      method: "search",
      data: { searchKey: searchKey, category: "", brand: "" },
    });
    console.log(Object.keys(data));
    if (data.success) {
      setProducts([...data.trendyol?.data]);
    }
  };

  useEffect(() => {
    getProducts("ruj");
  }, []);

  const renderItem = (e) => {
    if (!e.item?.name) {
      console.log(e);
    }
    // console.log(e);
    return (
      <Text style={styles.productItem}>
        {e.item?.name ? e.item.name : "Loading..."}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Searchbar
          placeholder="Search for a product"
          value={keyword}
          onSubmitEditing={(text) => {
            getProducts(text);
          }}
          onChangeText={(query) => setKeyword(query)}
        />
      </View>
      <FlatList
        style={styles.flatList}
        data={products}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={(e, index) => String(index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 8, backgroundColor: "#126715" },
  text: { flex: 1, color: "turquoise", justifyContent: "center", fontSize: 8 },
  flatList: {
    flex: 1,
    color: "#a23456",
    margin: 8,
  },
  contentContainer: { backgroundColor: "#123ff1" },
  productItem: {
    backgroundColor: "deepskyblue",
    padding: 8,
    margin: 8,
    fontSize: 14,
  },
});
