import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function Footer() {
  return (
    <View styles={styles.container}>
      <View style={styles.header}>
        <Text style={styles.descriptionText}>Descrição</Text>
      </View>

      <View style={styles.body}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          pariatur nesciunt autem hic veritatis impedit libero ipsum eaque sit
          aliquid quas assumenda eum, beatae dicta accusantium nemo. Unde,
          possimus est.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},

  header: {
    backgroundColor: "#333333",
    padding: 10,
  },
  descriptionText: {
    color: "#fff",
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "#fff",
    padding: 10,
  },
});
