import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Modal,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import HouseCard from "../components/House";
import FilterBar from "../components/Filterbar";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { API_BASE_URL } from "../config/config";

const HousesList = () => {
  const [houses, setHouses] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [checkedOptions, setCheckedOptions] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const searchCriteria = [
    {
      criteria: "Price",
      subCriteria: ["100-1000", "1001-10000", "10000+"],
    },
  ];

  useEffect(() => {
    fetch(`${API_BASE_URL}/houses`)
      .then((response) => response.json())
      .then((data) => {
        setHouses(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
        data={houses}
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default HousesList;
