import React from "react";
import { View, Text, StyleSheet } from "react-native";

const JobCard = ({ job }) => {
  return (
    <View style={[styles.container, { marginHorizontal: 10 }]}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.location}>{job.location}</Text>
      <Text style={styles.description}>{job.description}</Text>
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  company: {
    fontSize: 16,
    color: "gray",
  },
  location: {
    fontSize: 14,
    color: "gray",
  },
  description: {
    marginTop: 10,
    fontSize: 14,
  },
});

export default JobCard;
