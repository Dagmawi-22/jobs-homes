import React from "react";
import { View, FlatList } from "react-native";
import JobCard from "../Components/Job";
import SearchBar from "../Components/Searchbar";

const dummyJobs = [
  {
    id: 1,
    title: "CTO",
    company: "Zemen Bank",
    location: "Addis Ababa, ET",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    companyLogo:
      "https://pbs.twimg.com/profile_images/1301108895713296385/Z8zbH8NH_400x400.jpg",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOka6UET-L-Fap9BXa1j0LbYqfLHD9vULOAGD665CbQ&s",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "XYZ Inc.",
    location: "New York, NY",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    companyLogo:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    coverImage:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "ABC Tech",
    location: "San Francisco, CA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    companyLogo:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    coverImage:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
  },
  {
    id: 4,
    title: "Product Manager",
    company: "XYZ Inc.",
    location: "New York, NY",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    companyLogo:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    coverImage:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
  },
  {
    id: 5,
    title: "Software Engineer",
    company: "ABC Tech",
    location: "San Francisco, CA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    companyLogo:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    coverImage:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
  },
  {
    id: 6,
    title: "Product Manager",
    company: "XYZ Inc.",
    location: "New York, NY",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    companyLogo:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    coverImage:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
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
