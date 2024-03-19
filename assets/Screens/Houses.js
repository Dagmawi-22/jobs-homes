import React from "react";
import { View, FlatList } from "react-native";
import HouseCard from "../Components/House";
import SearchBar from "../Components/Searchbar";
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

const HousesList = () => {
  const renderHouseItem = ({ item }) => <HouseCard house={item} />;

  return (
    <View style={{ flex: 1 }}>
      <SearchBar placeholder="I'm looking for?" />
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
