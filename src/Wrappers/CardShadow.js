import React from "react";
import { View, Text } from "react-native";
import CardShadow from "../Wrappers/CardShadow";

const Screen = () => {
  return (
    <CardShadow style={{ flex: 1, padding: 20 }}>
      <View>
        <Text>Contenido de la pantalla con sombra</Text>
      </View>
    </CardShadow>
  );
};

export default Screen;
