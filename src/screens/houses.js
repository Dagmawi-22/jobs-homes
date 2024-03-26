import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Modal,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import HouseCard from "../components/House";
import FilterBar from "../components/Filterbar";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { API_BASE_URL } from "../config/config";

const HousesList = () => {
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [checkedOptions, setCheckedOptions] = useState([]);
  const [maxPrice, setMaxPrice] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const searchCriteria = [
    {
      criteria: "Maximum Price",
      subCriteria: ["100000", "20000", "30000"],
    },
  ];

  const dummyHouses = [
    {
      id: 1,
      user_id: "abc123",
      title: "Spacious Family Home with Stunning Views",
      price: 250000,
      location: "Los Angeles, California",
      description:
        "Beautiful family home located in the heart of Los Angeles with breathtaking views of the city skyline.",
      image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg",
    },
    {
      id: 2,
      user_id: "def456",
      title: "Modern Downtown Loft with Rooftop Terrace",
      price: 180000,
      location: "New York City, New York",
      description:
        "Sleek and stylish loft apartment in the bustling downtown area of New York City. Features a spacious rooftop terrace perfect for entertaining.",
      image: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg",
    },
  ];

  const [houses, setHouses] = useState(dummyHouses);

  const applyFilters = () => {
    let filteredData = [...dummyHouses];
    if (maxPrice) {
      filteredData = filteredData.filter((house) => house.price <= maxPrice);
    }
    setHouses(filteredData);
  };

  useEffect(() => {
    applyFilters();
  }, [maxPrice]);

  const handleFilterChange = (checkedOptions) => {
    setCheckedOptions(checkedOptions);
    const selectedPrice = parseInt(
      checkedOptions.find((option) => option.criteria === "Maximum Price")
        ?.subCriteria
    );
    setMaxPrice(selectedPrice);
  };

  const renderHouseItem = ({ item }) => (
    <HouseCard house={item} onPress={setSelectedHouse} />
  );

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

      {modalVisible && <View style={styles.overlay} />}

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
            <View style={styles.line}></View>
            <Image
              source={{ uri: selectedHouse?.image }}
              style={styles.houseImage}
            />
            <Text style={styles.modalText}>{selectedHouse?.title}</Text>
            <View style={styles.iconTextContainer}>
              <FontAwesome name="dollar" size={24} color="gray" />
              <Text style={styles.priceText}>${selectedHouse?.price}</Text>
            </View>
            <View style={styles.iconTextContainer}>
              <FontAwesome name="map-marker" size={24} color="gray" />
              <Text style={styles.locationText}>{selectedHouse?.location}</Text>
            </View>
            <View style={styles.iconTextContainer}>
              <FontAwesome name="info" size={24} color="gray" />
              <Text style={styles.descriptionText}>
                {selectedHouse?.description}
              </Text>
            </View>
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
  line: {
    alignSelf: "center",
    backgroundColor: "gray",
    borderRadius: 5,
    height: 5,
    width: 100,
    marginVertical: 10,
    marginBottom: 30,
    marginTop: -10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  priceText: {
    fontSize: 16,
    marginLeft: 10,
  },
  locationText: {
    fontSize: 16,
    marginLeft: 10,
  },
  descriptionText: {
    fontSize: 16,
    marginLeft: 10,
  },
  houseImage: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default HousesList;
