import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const JobCard = ({ job }) => {
  return (
    <View style={[styles.container, { marginHorizontal: 10 }]}>
      <View style={styles.section}>
        <Text style={styles.title}>
          <Feather name="briefcase" style={styles.icon} />{" "}
          <Text style={styles.titleText}>{job.title}</Text>
        </Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.section}>
        <Text style={styles.company}>
          <Feather name="users" style={styles.icon} />{" "}
          <Text style={styles.text}>{job.company}</Text>
        </Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.section}>
        <Text style={styles.location}>
          <Feather name="map-pin" style={styles.icon} />{" "}
          <Text style={styles.text}>{job.location}</Text>
        </Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.section}>
        <Text style={styles.description}>
          <Feather name="info" style={styles.icon} />{" "}
          <Text style={styles.text}>{job.description}</Text>
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
    padding: 15,
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
  section: {
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
  company: {
    fontSize: 16,
    color: "gray",
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    fontSize: 14,
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
    backgroundColor: "green",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    alignSelf: "flex-end",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    marginRight: 5,
    fontSize: 18,
    color: "black",
  },
  text: {
    marginLeft: 10,
  },
  titleText: {
    marginLeft: 10,
  },
});

export default JobCard;
