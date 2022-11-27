import React from "react";
import { StyleSheet, View } from "react-native";
import { Body } from "../body";
import { Footer } from "../footer";
import { Header } from "../header";

export function Card({ imageURI, name, hp, description }) {
  return (
    <View style={styles.container}>
      <Header name={name} hp={hp} />

      <Body imageURI={imageURI} />

      <Footer description={description} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#707588",
    padding: 10,
    width: "100%",
    borderRadius: 10,
    justifyContent: "space-between",
  },
});
