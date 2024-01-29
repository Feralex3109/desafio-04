import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../Global/Colors";
import CardShadow from "../Wrappers/CardShadow";

const CategoryItem = ({ category, setCategorySelected }) => {
  return (
    <Pressable onPress={() => setCategorySelected(category)}>
      <CardShadow style={styles.container}>
        <Text style={styles.text}>{category}</Text>
      </CardShadow>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginHorizontal: "10%",
    backgroundColor: Colors.blue1,
    margin: 10,
    padding: 10,
    justifyContent: "center",
  },
});
