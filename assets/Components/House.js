import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const HouseCard = ({ house }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: house.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{house.title}</Text>
        <Text style={styles.price}>{house.price}</Text>
        <Text style={styles.location}>{house.location}</Text>
        <Text style={styles.description}>{house.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  infoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#777",
  },
});

export default HouseCard;
