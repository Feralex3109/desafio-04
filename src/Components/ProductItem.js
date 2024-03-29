import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { Colors } from "../Global/Colors";
import React, { useEffect } from "react";

const ProductItem = ({ item, setProductDetailId }) => {
  const { width } = useWindowDimensions();

  return (
    <Pressable
      style={styles.container}
      onPress={() => setProductDetailId(item.id)}
    >
      <Text style={width > 350 ? styles.text : styles.textMin}>
        {item.title}
      </Text>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: item.thumbnail }}
      />
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 100,
    backgroundColor: Colors.blue1,
    marginHorizontal: "10%",
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 30,
  },

  text: {
    width: "60%",
    textAlign: "center",
    fontSize: 20,
  },

  textMin: {
    width: "60%",
    textAlign: "center",
    fontSize: 15,
  },

  image: {
    minWidth: 90,
    minHeight: 90,
    width: "30%",
  },
});
