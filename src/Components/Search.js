import { StyleSheet, TextInput, View, Pressable } from "react-native";
import { Colors } from "../Global/Colors";
import { AntDesign, Entypo } from "@expo/vector-icons";
import React, { useState } from "react";

const Search = ({ setkeyword }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const seach = () => {
    const expression = /.*[0-9].*/;

    if (expression.test(input)) {
      setError("No debe contener numeros");
    } else {
      setkeyword(input);
    }
  };

  const removeItem = () => {
    setInput("");
    setError("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="Buscar Producto"
          value={input}
          onChangeText={(t) => setInput(t)}
        />
        <Pressable onPress={seach}>
          <AntDesign name="search1" color="black" size={25} />
        </Pressable>
        <Pressable onPress={removeItem}>
          <Entypo name="circle-with-cross" color="black" size={25} />
        </Pressable>
      </View>
      {error ? <Text style={styles.errorInput}>{error}</Text> : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Colors.blue2,
  },
  containerInput: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  input: {
    backgroundColor: Colors.blue3,
    width: "75%",
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 10,
  },
  errorInput: {
    color: "red",
    paddingHorizontal: 10,
  },
});
