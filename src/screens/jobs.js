import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import JobCard from "../components/Job";
import FilterBar from "../components/Filterbar";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { API_BASE_URL } from "../config/config";
import { useSelector } from "react-redux";

const searchCriteria = [
  {
    criteria: "Job Categories",
    subCriteria: ["IT", "Sales"],
  },
];

const dummyJobs = [
  {
    id: 1,
    user_id: "abc123",
    company: "African Union",
    title: "Senior Software Engineer",
    location: "San Francisco, CA",
    category: "IT",
    description:
      "We're looking for an experienced Senior Software Engineer to join our dynamic team. The ideal candidate will have strong expertise in building scalable web applications using modern technologies such as React, Node.js, and MongoDB.",
  },
  {
    id: 2,
    user_id: "def456",
    company: "Zemen Bank",
    category: "Sales",
    title: "Marketing Manager",
    location: "New York, NY",
    description:
      "Exciting opportunity for a Marketing Manager to lead our marketing efforts and drive brand awareness. The ideal candidate will have a proven track record in developing and executing marketing strategies across multiple channels.",
  },
  {
    id: 3,
    company: "Zemen Bank",
    user_id: "ghi789",
    category: "IT",
    title: "UX/UI Designer",
    location: "Seattle, WA",
    description:
      "Join our innovative design team as a UX/UI Designer and help create intuitive and visually appealing user experiences. The ideal candidate will have a strong portfolio showcasing their design skills and a deep understanding of user-centered design principles.",
  },
];

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(dummyJobs); // Initialize with dummyJobs
  const [checkedOptions, setCheckedOptions] = useState([]);
  const [initialRender, setInitialRender] = useState(true); // State to track initial render

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (!initialRender) {
      // Skip fetch on initial render
      fetch(`${API_BASE_URL}/jobs`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setJobs(data?.data);
        })
        .catch((error) => {
          console.error("Error fetching jobs:", error);
        });
    }
  }, [initialRender, user.token]);

  useEffect(() => {
    if (!initialRender) {
      applyFilters();
    }
  }, [checkedOptions, initialRender]);

  const applyFilters = () => {
    console.log("filtering");
    const filteredData = dummyJobs.filter((job) =>
      checkedOptions?.includes(job.category)
    );
    console.log("filtered", filteredData, checkedOptions);
    setFilteredJobs(filteredData);
  };

  const renderJobItem = ({ item }) => <JobCard job={item} />;

  const handleFilterChange = (checkedOptions) => {
    setCheckedOptions(checkedOptions);
    setInitialRender(false);
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
        data={filteredJobs}
        renderItem={renderJobItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingVertical: 10 }}
        ListEmptyComponent={
          <Text
            style={{
              textAlign: "center",
              marginTop: 50,
              fontSize: 18,
              color: "gray",
            }}
          >
            No houses found
          </Text>
        }
      />
    </View>
  );
};

export default Jobs;
