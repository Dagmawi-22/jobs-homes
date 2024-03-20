import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { primary_color } from "../Config/config";

const FilterBar = ({ searchCriteria, onFilterChange }) => {
  const [filterOpen, setFilterOpen] = useState(false); // State for filter open/close
  const [filterCriteria, setFilterCriteria] = useState([]);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const handleFilterCriteriaChange = (criteria) => {
    const updatedCriteria = filterCriteria.includes(criteria)
      ? filterCriteria.filter((item) => item !== criteria)
      : [...filterCriteria, criteria];
    setFilterCriteria(updatedCriteria);
    onFilterChange(updatedCriteria); // Call the callback function with updated checked options
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.filterIconContainer}
        onPress={toggleFilter}
      >
        <Feather name={filterOpen ? "x" : "filter"} style={styles.filterIcon} />
      </TouchableOpacity>
      {filterOpen && (
        <View style={styles.filterCriteriaContainer}>
          {searchCriteria.map((item, index) => (
            <View key={index}>
              <Text style={styles.filterTitle}>{item.criteria}:</Text>
              {item.subCriteria.map((subItem, subIndex) => (
                <TouchableOpacity
                  key={subIndex}
                  style={styles.filterItem}
                  onPress={() => handleFilterCriteriaChange(subItem)}
                >
                  <Text>{subItem}</Text>
                  <Feather
                    name={
                      filterCriteria.includes(subItem)
                        ? "check-square"
                        : "square"
                    }
                    style={styles.filterCheckbox}
                  />
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    marginLeft: 30,
    marginTop: 10,
    zIndex: 9999,
  },
  filterIconContainer: {
    borderRadius: 8,
    padding: 10,
    width: 40,
    backgroundColor: "#fff",
    elevation: 5,
  },
  filterIcon: {
    fontSize: 20,
    color: "#888",
  },
  filterCriteriaContainer: {
    position: "absolute",
    top: "110%",
    padding: 10,
    left: 0,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
    zIndex: 1000,
    width: "90%",
    maxHeight: 400,
  },
  filterTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  filterItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  filterCheckbox: {
    fontSize: 20,
    marginLeft: "auto",
    color: primary_color,
  },
});

export default FilterBar;
