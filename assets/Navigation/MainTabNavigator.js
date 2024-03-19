import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Jobs from "../Screens/Jobs";
import Houses from "../Screens/Houses";
import { primary_color } from "../Config/config";
import { View, TouchableOpacity, Modal, Text, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  const [showModal, setShowModal] = useState(false);

  const handleAddPress = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Jobs") {
              iconName = focused ? "work" : "work-outline";
            } else if (route.name === "Houses") {
              iconName = focused ? "other-houses" : "other-houses";
            }

            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: primary_color,
          inactiveTintColor: "gray",
          elevation: 5,
        }}
      >
        <Tab.Screen name="Jobs" component={Jobs} />
        <Tab.Screen name="Houses" component={Houses} />
      </Tab.Navigator>

      {/* Modal for Add Button */}
      <Modal visible={showModal} animationType="slide" transparent>
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={handleCloseModal}
        >
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={handleCloseModal}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
            {/* Add your Add Form here */}
            {/* For example: <AddForm /> */}
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddPress}>
        <MaterialIcons name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  addButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: primary_color,
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  closeButton: {
    textAlign: "right",
    color: primary_color,
    fontSize: 16,
    fontWeight: "bold",
  },
});
