import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { primary_color } from "../config/config";

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
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.backButton} onPress={onSelectBack}>
          <MaterialIcons name="arrow-back" size={24} color="#007bff" />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        <MaterialIcons
          name={selectedOption === "job" ? "work" : "house"}
          size={144}
          color={primary_color}
        />
        <Text style={styles.modalTitle}>Add a new {selectedOption}</Text>
        {/* Form fields */}
        {selectedOption === "House" ? (
          <>
            <TextInput
              style={styles.input}
              placeholder="Title"
              value={formData.title}
              onChangeText={(text) => handleInputChange("title", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Price"
              value={formData.price}
              onChangeText={(text) => handleInputChange("price", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Location"
              value={formData.location}
              onChangeText={(text) => handleInputChange("location", text)}
            />
            <TextInput
              style={[styles.input, styles.descriptionInput]}
              placeholder="Description"
              value={formData.description}
              onChangeText={(text) => handleInputChange("description", text)}
              multiline
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={formData.email}
              onChangeText={(text) => handleInputChange("email", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone"
              value={formData.phone}
              onChangeText={(text) => handleInputChange("phone", text)}
            />
          </>
        ) : (
          <>
            <TextInput
              style={styles.input}
              placeholder="Title"
              value={formData.title}
              onChangeText={(text) => handleInputChange("title", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Location"
              value={formData.location}
              onChangeText={(text) => handleInputChange("location", text)}
            />
            <TextInput
              style={[styles.input, styles.descriptionInput]}
              placeholder="Description"
              value={formData.description}
              onChangeText={(text) => handleInputChange("description", text)}
              multiline
            />
            <TextInput
              style={styles.input}
              placeholder="Logo URL"
              value={formData.logo}
              onChangeText={(text) => handleInputChange("logo", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Cover Image URL"
              value={formData.coverImage}
              onChangeText={(text) => handleInputChange("coverImage", text)}
            />
          </>
        )}
        {/* Submit button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
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
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  backButtonText: {
    color: "#007bff",
    fontSize: 16,
    marginLeft: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  backButtonText: {
    color: "#007bff",
    fontSize: 16,
    marginLeft: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  descriptionInput: {
    height: 80,
    textAlignVertical: "top", // Vertical alignment for multiline text
  },
  submitButton: {
    backgroundColor: primary_color,
    padding: 10,
    paddingHorizontal: 70,
    alignSelf: "flex-end",
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SelectionComponent;
