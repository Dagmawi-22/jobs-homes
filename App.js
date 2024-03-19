import React from "react";
import { useFonts } from "expo-font";
import Navigation from "./assets/Navigation/NavigationContainer";

const App = () => {
  const [loaded] = useFonts({
    Raleway: {
      uri: "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap",
    },
  });

  if (!loaded) {
    // Font is still loading, return loading indicator or splash screen
    return null; // For simplicity, returning null, replace with your loading indicator component
  }

  return <Navigation />;
};

export default App;
