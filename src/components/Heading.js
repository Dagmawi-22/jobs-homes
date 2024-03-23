import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Heading = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 7,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Heading;
