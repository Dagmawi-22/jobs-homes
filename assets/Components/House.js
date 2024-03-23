import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { primary_color } from "../Config/config";

const HouseCard = ({ house, onPress }) => {
  const isEven = house.id % 2 === 0;

  const handleCallSeller = () => {
    console.log("Calling seller...");
  };

  const handleEmailSeller = () => {
    console.log("Emailing seller...");
  };

  return (
    <View style={styles.container}>
      {!isEven ? (
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{house.title}</Text>
          <Text style={styles.price}>{house.price}</Text>
          <Text style={styles.location}>{house.location}</Text>
          <Text style={styles.description}>{house.description}</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttonOutlined}
              onPress={handleEmailSeller}
            >
              <Fontisto name="email" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleCallSeller}>
              <Ionicons name="call-outline" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Image source={{ uri: house.image }} style={styles.image} />
      )}
      {isEven ? (
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{house.title}</Text>
          <Text style={styles.price}>{house.price}</Text>
          <Text style={styles.location}>{house.location}</Text>
          <Text style={styles.description}>{house.description}</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttonOutlined}
              onPress={handleEmailSeller}
            >
              <Fontisto name="email" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleCallSeller}>
              <Ionicons name="call-outline" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Image source={{ uri: house.image }} style={styles.image} />
      )}
      <TouchableOpacity
        style={styles.rightArrow}
        onPress={() => onPress(house)}
      >
        <Text style={{ color: primary_color, fontSize: 24 }}>➔</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    alignItems: "center",
    marginHorizontal: 30,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: primary_color,
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
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  button: {
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: primary_color,
    borderRadius: 5,
  },
  buttonOutlined: {
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#f6f6f2",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
  buttonOutlinedText: {
    color: "#000",
    fontSize: 14,
  },
  rightArrow: {
    position: "absolute",
    bottom: 5,
    right: 5,
  },
});

export default HouseCard;
