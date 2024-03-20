import React, { useState } from "react";
import { View, FlatList } from "react-native";
import HouseCard from "../Components/House";
import FilterBar from "../Components/Filterbar";
const dummyHouses = [
  {
    id: "1",
    title: "Beautiful House with Garden",
    price: "$500,000",
    location: "New York",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
  },
  {
    id: "2",
    title: "Cozy Cottage near the Lake",
    price: "$300,000",
    location: "Los Angeles",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
  },
  {
    id: "3",
    title: "Beautiful House with Garden",
    price: "$500,000",
    location: "New York",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
  },
  {
    id: "4",
    title: "Cozy Cottage near the Lake",
    price: "$300,000",
    location: "Los Angeles",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
  },
  // Add more dummy house objects here
];

const searchCriteria = [
  {
    criteria: "Category",
    subCriteria: ["Electronics", "Clothing", "Books"],
  },
  {
    criteria: "Price Range",
    subCriteria: ["$0 - $50", "$50 - $100", "$100 - $200", "Above $200"],
  },
  // Add more criteria objects as needed
];

const HousesList = () => {
  const renderHouseItem = ({ item }) => <HouseCard house={item} />;

  const [checkedOptions, setCheckedOptions] = useState([]);

  const handleFilterChange = (checkedOptions) => {
    setCheckedOptions(checkedOptions);
    console.log("Checked Options:", checkedOptions);
  };

  return (
    <View style={{ flex: 1 }}>
      <FilterBar
        searchCriteria={searchCriteria}
        onFilterChange={handleFilterChange}
      />
      <FlatList
        data={dummyHouses}
        renderItem={renderHouseItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 10 }}
      />
    </View>
  );
};

export default HousesList;
