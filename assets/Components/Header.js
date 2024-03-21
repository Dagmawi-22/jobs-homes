import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import { primary_color } from "../Config/config";
import { MaterialIcons } from "@expo/vector-icons";

const Header = ({ title, avatarUrl }) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    // Implement logout functionality here
    console.log("Logout pressed");
    setShowLogoutModal(false); // Close the logout modal after logout
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightContent}>
        <TouchableOpacity style={styles.avatarContainer}>
          <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowLogoutModal(true)}
          style={styles.logoutButton}
        >
          <MaterialIcons name="logout" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Logout Confirm Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showLogoutModal}
        onRequestClose={() => setShowLogoutModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure you want to logout?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                onPress={handleLogout}
                style={styles.confirmButton}
              >
                <Text style={styles.buttonText2}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setShowLogoutModal(false)}
                style={styles.cancelButton}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: primary_color,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  rightContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  logoutButton: {
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "80%",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  confirmButton: {
    backgroundColor: "#f6f6f2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: primary_color,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  buttonText2: {
    color: "#000",
    fontSize: 16,
  },
});

export default Header;
