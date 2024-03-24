import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
  Image,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { primary_color } from "../config/config";
import * as ImagePicker from "expo-image-picker";

const SelectionButton = ({ option, selected, onSelect }) => {
  return (
    <TouchableOpacity
      style={[styles.button, selected ? styles.selectedButton : null]}
      onPress={() => onSelect(option)}
    >
      <MaterialIcons
        name={option === "Job" ? "work" : "house"}
        size={24}
        color={selected ? "#fff" : "#333"}
      />
      <Text style={[styles.buttonText, selected ? styles.selectedText : null]}>
        {option}
      </Text>
    </TouchableOpacity>
  );
};

const PostingForm = ({ selectedOption, onSelectBack }) => {
  const [formData, setFormData] = React.useState({
    title: "",
    price: "",
    location: "",
    description: "",
    email: "",
    phone: "",
    logo: "",
    coverImage: "",
  });

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    // Handle form submission
    // You can access form data from 'formData' state
    console.log("Form submitted:", formData);
    // Reset form data
    setFormData({
      title: "",
      price: "",
      location: "",
      description: "",
      email: "",
      phone: "",
      logo: "",
      coverImage: "",
    });
  };

  return (
    <Modal visible={!!selectedOption} animationType="slide">
      <>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/job.jpg")}
            style={styles.bg}
            resizeMode="cover"
          />
        </View>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Add a new {selectedOption}</Text>
          {/* Form fields */}
          {selectedOption === "house" ? (
            <>
              {image ? (
                <Image source={{ uri: image }} style={styles.image} />
              ) : (
                <View style={styles.centeredTextContainer}>
                  <Text style={styles.centeredText}>Photo</Text>
                </View>
              )}

              <Ionicons
                name="add"
                size={24}
                color="red"
                onPress={pickImage}
                style={styles.editIcon}
              />

              <TextInput
                style={styles.input}
                placeholder="Title (e.g., Beautiful Villa)"
                value={formData.title}
                onChangeText={(text) => handleInputChange("title", text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Price (e.g., 100000)"
                value={formData.price}
                keyboardType="numeric"
                onChangeText={(text) => handleInputChange("price", text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Location (e.g., New York City)"
                value={formData.location}
                onChangeText={(text) => handleInputChange("location", text)}
              />
              <TextInput
                style={[styles.input, styles.descriptionInput]}
                placeholder="Description (e.g., Spacious 3-bedroom apartment with stunning views)"
                value={formData.description}
                onChangeText={(text) => handleInputChange("description", text)}
                multiline
              />
              <TextInput
                style={styles.input}
                placeholder="Email (e.g., example@example.com)"
                value={formData.email}
                onChangeText={(text) => handleInputChange("email", text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Phone (e.g., 123-456-7890)"
                value={formData.phone}
                keyboardType="numeric"
                onChangeText={(text) => handleInputChange("phone", text)}
              />
            </>
          ) : (
            <>
              <TextInput
                style={styles.input}
                placeholder="Title e.g., Software Engineer"
                value={formData.title}
                onChangeText={(text) => handleInputChange("title", text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Category e.g., Technology"
                value={formData.logo}
                onChangeText={(text) => handleInputChange("logo", text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Location e.g., New York, NY"
                value={formData.location}
                onChangeText={(text) => handleInputChange("location", text)}
              />
              <TextInput
                style={[styles.input, styles.descriptionInput]}
                placeholder="Description e.g., We are looking for a skilled software engineer..."
                value={formData.description}
                onChangeText={(text) => handleInputChange("description", text)}
                multiline
              />
            </>
          )}
          {/* Submit button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </>
    </Modal>
  );
};

const SelectionComponent = ({}) => {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const handleSelectBack = () => {
    setSelectedOption(null);
  };

  return (
    <>
      <Text style={styles.header}>What are you listing?</Text>
      <View style={styles.container}>
        <SelectionButton
          option="Job"
          selected={selectedOption === "Job"}
          onSelect={() => handleSelectOption("job")}
        />
        <SelectionButton
          option="House"
          selected={selectedOption === "House"}
          onSelect={() => handleSelectOption("house")}
        />
        <PostingForm
          selectedOption={selectedOption}
          onSelectBack={handleSelectBack}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  header: {
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 20,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  selectedButton: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
  },
  buttonText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 5,
  },
  selectedText: {
    color: "#fff",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: -20,
  },
  modalTitle: {
    fontSize: 34,
    color: "#fff",
    fontWeight: "bold",
    marginTop: -130,
    textShadowColor: "rgba(0, 0, 0, 0.5)", // Color of the shadow
    textShadowOffset: { width: 2, height: 2 }, // Offset of the shadow
    textShadowRadius: 5, // Radius of the shadow
    marginBottom: 50,
  },

  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  backButtonText: {
    color: primary_color,
    fontSize: 16,
    marginLeft: 5,
  },
  image: {
    width: "100",
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  bg: {
    width: "100%",
    height: 200,
    borderRadius: 5,
    marginBottom: 20,
  },
  imageContainer: {
    width: "100%",
    height: 250,
    borderRadius: 5,
    marginBottom: 20,
    position: "relative",
    overflow: "hidden",
  },

  editIcon: {
    backgroundColor: primary_color,
    elevation: 10,
    marginLeft: 110,
    marginTop: -50,
    color: "#fff",
    padding: 5,
    borderRadius: 20,
    zIndex: 100,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderBottomWidth: 1, // Applying a bottom border only
    paddingHorizontal: 10,
    width: "80%",
    marginBottom: 10,
    fontSize: 16, // Adjust the font size
    color: "#333", // Adjust the text color
  },
  descriptionInput: {
    height: 80,
    textAlignVertical: "top", // Vertical alignment for multiline text
  },
  submitButton: {
    backgroundColor: primary_color, // Background color to match the outer layer
    paddingVertical: 12, // Adjusted padding for better appearance
    paddingHorizontal: 20, // Adjusted padding for better appearance
    alignSelf: "flex-end",
    marginRight: "10%",
    borderRadius: 25, // Increase border radius for a smoother appearance
    marginTop: 20,
    borderWidth: 2, // Add border width
    borderColor: primary_color, // Border color to match the inner layer
    elevation: 3, // Add elevation for a subtle shadow effect
    shadowColor: "#000", // Shadow color
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 3, // Shadow blur radius
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  centeredTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  centeredText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});

export default SelectionComponent;
