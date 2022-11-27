import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export function Body({ imageURI }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: imageURI,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
