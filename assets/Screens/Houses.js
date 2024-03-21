import React, { useState } from "react";
import {
  View,
  FlatList,
  Modal,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import HouseCard from "../Components/House";
import FilterBar from "../Components/Filterbar";
import Header from "../Components/Header";
import Heading from "../Components/Heading";

const HousesList = () => {
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

  const [selectedHouse, setSelectedHouse] = useState(null); // State to track the selected house
  const [checkedOptions, setCheckedOptions] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const renderHouseItem = ({ item }) => (
    <HouseCard house={item} onPress={setSelectedHouse} />
  );

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
      <Heading text={"Browse Houses"} />
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

      {/* Black overlay when modal is open */}
      {modalVisible && <View style={styles.overlay} />}

      {/* Modal for house details */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={selectedHouse !== null}
        onRequestClose={() => setSelectedHouse(null)}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={styles.modalContainer}
          onPress={() => setSelectedHouse(null)}
        >
          <View style={styles.bottomSheet}>
            <Text style={styles.modalText}>{selectedHouse?.title}</Text>
            {/* Add more details or actions here */}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  bottomSheet: {
    backgroundColor: "#fff",
    elevation: 8,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    minHeight: 500,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
  },
});

export default HousesList;
