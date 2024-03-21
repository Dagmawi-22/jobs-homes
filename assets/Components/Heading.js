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
    backgroundColor: "#fff", // Background color of the heading container
    paddingHorizontal: 20, // Horizontal padding
    paddingVertical: 10, // Vertical padding
    borderBottomWidth: 1, // Bottom border width
    borderBottomColor: "#ccc", // Bottom border color
    marginVertical: 7,
  },
  text: {
    fontSize: 18, // Font size of the heading text
    fontWeight: "bold", // Font weight of the heading text
  },
});

export default Heading;
