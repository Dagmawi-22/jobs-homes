import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import JobCard from "../components/Job";
import FilterBar from "../components/Filterbar";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { API_BASE_URL } from "../config/config";

const searchCriteria = [
  {
    criteria: "company",
    subCriteria: ["Zemen", "Amazon", "Zoho"],
  },
  {
    criteria: "category",
    subCriteria: ["IT", "Sales"],
  },
];

const dummyJobs = [
  {
    id: 1,
    title: "Check",
    location: "Addis A",
    description: "A random description for the",
  },
];

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [checkedOptions, setCheckedOptions] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/jobs`)
      .then((response) => response.json())
      .then((data) => {
        setJobs(data?.data);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);

  const renderJobItem = ({ item }) => <JobCard job={item} />;

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
