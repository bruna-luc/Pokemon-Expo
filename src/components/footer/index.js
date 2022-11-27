import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function Footer({ description }) {
  return (
    <View styles={styles.container}>
      <View style={styles.header}>
        <Text style={styles.descriptionText}>Descrição</Text>
      </View>

      <View style={styles.body}>
        <Text>{description}</Text>
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
    backgroundColor: "#ffffff90",
    padding: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
