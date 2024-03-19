import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Jobs from "../Screens/Jobs";
import Houses from "../Screens/Houses";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
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
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Jobs" component={Jobs} />
      <Tab.Screen name="Houses" component={Houses} />
    </Tab.Navigator>
  );
}
