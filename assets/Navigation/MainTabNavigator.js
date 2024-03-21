import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Jobs from "../Screens/Jobs";
import Houses from "../Screens/Houses";
import { primary_color } from "../Config/config";
import { View, TouchableOpacity, Modal, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SelectionComponent from "../Components/JobOrHouse";
import Auth from "../Screens/Auth";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);

  const getUserObject = async () => {
    try {
      const userData = await AsyncStorage.getItem("user");
      if (userData !== null) {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error("Error getting user object:", error);
    }
  };

  const handleAddPress = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const renderTabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "job") {
              iconName = focused ? "work" : "work-outline";
            } else if (route.name === "house") {
              iconName = focused ? "other-houses" : "other-houses";
            }

            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
        })}
        tabBarOptions={{
          activeTintColor: primary_color,
          inactiveTintColor: "gray",
          elevation: 5,
        }}
      >
        <Tab.Screen name="job" component={Jobs} />
        <Tab.Screen name="house" component={Houses} />
      </Tab.Navigator>
    );
  };

  useEffect(() => {
    getUserObject();
  }, [user]);

  return (
    <View style={{ flex: 1 }}>
      {user ? (
        <>
          {renderTabNavigator()}

          {/* Modal for Add Button */}
          <Modal visible={showModal} animationType="slide" transparent>
            <TouchableOpacity
              style={styles.modalContainer}
              activeOpacity={1}
              onPress={handleCloseModal}
            >
              <View style={styles.modalContent}>
                <TouchableOpacity onPress={handleCloseModal}></TouchableOpacity>
                <SelectionComponent />
                {/* Add your Add Form here */}
                {/* For example: <AddForm /> */}
              </View>
            </TouchableOpacity>
          </Modal>

          {/* Add Button */}
          <TouchableOpacity style={styles.addButton} onPress={handleAddPress}>
            <MaterialIcons name="add" size={30} color="white" />
          </TouchableOpacity>
        </>
      ) : (
        <Auth />
      )}
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
    padding: 0,
  },
  closeButton: {
    textAlign: "right",
    color: primary_color,
    fontSize: 16,
    fontWeight: "bold",
  },
});
