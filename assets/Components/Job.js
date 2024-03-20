import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { primary_color } from "../Config/config";

const JobCard = ({ job }) => {
  return (
    <View style={[styles.container, { marginHorizontal: 30 }]}>
      <View style={styles.coverImageContainer}>
        <Image source={{ uri: job.coverImage }} style={styles.coverImage} />
        <View style={styles.logoContainer}>
          <Image source={{ uri: job.companyLogo }} style={styles.logo} />
          <Text style={styles.companyName}>{job.company}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>
          <Feather name="briefcase" style={styles.icon} /> {job.title}
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.location}>
          <Feather name="map-pin" style={styles.icon} /> {job.location}
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.description}>
          <Feather name="info" style={styles.icon} /> {job.description}
        </Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Easy Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  coverImageContainer: {
    position: "relative",
  },
  coverImage: {
    width: "100%",
    height: 130,
    marginBottom: 7,
  },
  logoContainer: {
    position: "absolute",
    top: "50%",
    left: 50,
    right: 50,
    paddingVertical: 10,
    transform: [{ translateY: -25 }],
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 10,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  companyName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  section: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    opacity: 0.3,
    marginVertical: 1,
  },
  title: {
    fontSize: 19,
    textTransform: "uppercase",
    fontWeight: "bold",
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    fontSize: 16,
    color: "gray",
    flexDirection: "row",
    alignItems: "center",
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    color: "#777",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    backgroundColor: primary_color,
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    paddingRight: 10,
    fontSize: 18,
    color: "black",
  },
});

export default JobCard;
