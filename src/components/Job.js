import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { primary_color } from "../config/config";
import { useSelector } from "react-redux";

const companyLogo =
  "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg";
const coverImage =
  "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg";

const JobCard = ({ job }) => {
  const user = useSelector((state) => state.user.user);
  const isOwner = job.user_id === user._id;

  return (
    <View style={[styles.container, { marginHorizontal: 30 }]}>
      <View style={styles.coverImageContainer}>
        <Image source={{ uri: coverImage }} style={styles.coverImage} />
        <View style={styles.logoContainer}>
          <Image source={{ uri: companyLogo }} style={styles.logo} />
          <Text style={styles.companyName}>{job.company}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>{job.title}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.location}>
          <Feather name="briefcase" style={styles.icon} /> {job.category}
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
    opacity: 0.7,
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
    elevation: 100,
    // backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 10,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  companyName: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    elevation: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
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
