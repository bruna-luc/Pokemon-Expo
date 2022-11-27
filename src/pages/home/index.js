import React from "react";
import { StyleSheet, View } from "react-native";
import { Card } from "../../components/card";

export function Home() {
  return (
    <View style={styles.container}>
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    paddingTop: 40,
  },
});
