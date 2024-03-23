import React, { useState } from "react";
import { View, FlatList } from "react-native";
import JobCard from "../Components/Job";
import FilterBar from "../Components/Filterbar";
import Header from "../Components/Header";
import Heading from "../Components/Heading";
const searchCriteria = [
  {
    criteria: "title",
    subCriteria: ["CTO", "Sales", "Software Enginner"],
  },
  {
    criteria: "Date Posted",
    subCriteria: ["11/2023 - 12/2023", "1/2024 - 7/2024"],
  },
];

const dummyJobs = [
  {
    id: 1,
    title: "CTO",
    company: "Zemen Bank",
    location: "Addis Ababa, ET",
    description:
      "Responsible for leading the bank's IT team, based in Addis Ababa.",
    companyLogo:
      "https://pbs.twimg.com/profile_images/1301108895713296385/Z8zbH8NH_400x400.jpg",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOka6UET-L-Fap9BXa1j0LbYqfLHD9vULOAGD665CbQ&s",
  },
  {
    id: 2,
    title: "Software Architect",
    company: "XYZ Inc.",
    location: "New York, NY",
    description: "You will play a pivotal role in designing our new projects.",
    companyLogo:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    coverImage:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
  },
  // Add more dummy job objects as needed
];

const Jobs = () => {
  const renderJobItem = ({ item }) => <JobCard job={item} />;

  const [checkedOptions, setCheckedOptions] = useState([]);

  const handleFilterChange = (checkedOptions) => {
    setCheckedOptions(checkedOptions);
    console.log("Checked Options:", checkedOptions);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        title={"Hi Joe"}
        avatarUrl={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9C5fdmPrSg2vqk78RwqfY6_ZKBJYHnD82lGQxN86f6A&s"
        }
      />
      <Heading text={"Browse Jobs"} />
      <FilterBar
        searchCriteria={searchCriteria}
        onFilterChange={handleFilterChange}
      />
      <FlatList
        data={dummyJobs}
        renderItem={renderJobItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Jobs;
