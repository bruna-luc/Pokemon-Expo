import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function Header({ name, hp }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <Text style={styles.hp}>HP {hp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#eeeeee50",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  name: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  hp: {
    fontSize: 16,
    color: "#fff",
    backgroundColor: "#333333",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 16,
  },
});
