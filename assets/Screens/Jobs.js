import React from "react";
import { View, FlatList } from "react-native";
import JobCard from "../Components/Job";
import SearchBar from "../Components/Searchbar";

const dummyJobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "ABC Tech",
    location: "San Francisco, CA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "XYZ Inc.",
    location: "New York, NY",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "ABC Tech",
    location: "San Francisco, CA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    title: "Product Manager",
    company: "XYZ Inc.",
    location: "New York, NY",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    title: "Software Engineer",
    company: "ABC Tech",
    location: "San Francisco, CA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    title: "Product Manager",
    company: "XYZ Inc.",
    location: "New York, NY",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Jobs = () => {
  const renderJobItem = ({ item }) => <JobCard job={item} />;

  return (
    <View style={{ flex: 1 }}>
      <SearchBar placeholder="I'm looking for?" />
      <FlatList
        data={dummyJobs}
        renderItem={renderJobItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Jobs;
