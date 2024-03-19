import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons"; // Import Feather icon from @expo/vector-icons

const SearchBar = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#888"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginTop: 10,
  },
  icon: {
    fontSize: 20,
    marginRight: 10,
    color: "#888",
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    color: "#333",
  },
});

export default SearchBar;
