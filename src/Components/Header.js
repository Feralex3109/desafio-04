import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { Colors } from "../Global/Colors";
import React, { useEffect, useState } from "react";

const Header = ({ title = "Producto" }) => {
  const { width, height } = useWindowDimensions();
  const [landscape, setLandscape] = useState(false);

  useEffect(() => {
    if (width > height) {
      setLandscape(true);
    } else {
      setLandscape(false);
    }
  }, [width, height]);

  return (
    <View style={landscape ? styles.containerLandscape : styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue1,
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },

  containerLandscape: {
    backgroundColor: Colors.blue1,
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
