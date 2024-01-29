import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Header from "../Components/Header";
import Search from "../Components/Search";
import allProducts from "../Data/products.json";
import ProductItem from "../Components/ProductItem";
import React, { useEffect, useState } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

const ItemListCategories = ({ category, setCategorySelected }) => {
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState(allProducts);

  useEffect(() => {
    if (category) {
      const productsCategory = allProducts.filter(
        (product) => product.category === category
      );
      const productsFiltered = productsCategory.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(productsFiltered);
    } else {
      const productsFiltered = allProducts.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(productsFiltered);
    }
  }, [keyword]);

  return (
    <>
      <Header />
      <Search setKeyword={setKeyword} />
      <Pressable
        style={styles.goBack}
        title="Go Back"
        onPress={() => setCategorySelected("")}
      >
        <Text>Volver</Text>
      </Pressable>
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem item={item} setProductDetailId={setProductDetailId} />
        )}
      />
    </>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  goBack: {
    width: "100%",
    backgroundColor: Colors.blue1,
    padding: 10,
    paddingStart: 40,
  },

  input: {
    backgroundColor: Colors.blue2,
    width: "75%",
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 10,
  },
});
