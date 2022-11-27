import React from "react";
import { StyleSheet, View } from "react-native";
import { Body } from "../body";
import { Footer } from "../footer";
import { Header } from "../header";

export function Card() {
  return (
    <View style={styles.container}>
      <Header name="Pikachu" hp={300} />

      <Body />

      <Footer />
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
