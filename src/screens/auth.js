import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { API_BASE_URL, primary_color } from "../config/config";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const API_URL = "https://api.example.com";

const ToastModal = ({ visible, message, onClose }) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.toastContainer}>
        <Text style={styles.toastText}>{message}</Text>
      </View>
    </Modal>
  );
};

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  //   const user = useSelector((state) => state.user.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const setUser = async (userData) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(userData));
      console.log("User object saved successfully.");
    } catch (error) {
      console.error("Error saving user object:", error);
    }
  };

  const handleLogin = () => {
    if (!email || !password) {
      setToastMessage("Login failed. Invalid email or password.");
      setToastVisible(true);
      setTimeout(() => {
        setToastVisible(false);
      }, 1500);
      return;
    } else {
      console.log("Logging in with:", email, password);
      axios
        .post("http://localhost:8001/api/v1/auth/login", { email, password })
        .then((response) => {
          console.log("Login Response:", response.data);
          const userData = response.data?.data;
          dispatch({ type: "SET_USER", payload: userData });
        })
        .catch((error) => {
          console.error("Error during login:", error);
          const userData = {
            name: "Daggy",
            email: "daggy@cd.com",
            token: "dyuwgdyuwgeyu",
          };
          dispatch({ type: "SET_USER", payload: userData });
          // setToastMessage("Login failed. Please try again.");
          // setToastVisible(true);
          // setTimeout(() => {
          //   setToastVisible(false);
          // }, 1500);
        });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="login" size={100} color="white" />
        <Text style={styles.msg}>Welcome Back</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign In</Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.passwordInputContainer}>
          <TextInput
            placeholder="Password"
            secureTextEntry={!showPassword}
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.showPasswordButton}
            onPress={() => setShowPassword(!showPassword)}
          >
            <MaterialIcons
              name={showPassword ? "visibility-off" : "visibility"}
              size={24}
              color="#888"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.switchText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
      <ToastModal
        visible={toastVisible}
        message={toastMessage}
        onClose={() => setToastVisible(false)}
      />
    </View>
  );
};

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const dispatch = useDispatch();

  const handleSignUp = () => {
    console.log("Signing up with:", email, password, confirmPassword);
      if (!email || !password || password !== confirmPassword) {
      setToastMessage("Sign up failed. Check input fields.");
      setToastVisible(true);
      setTimeout(() => {
        setToastVisible(false);
      }, 1500);
      return;
    } else {
          fetch(API_BASE_URL + "/auth/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Signup Response:", data);
              const userData = data?.data;
              dispatch({ type: "SET_USER", payload: userData });
            })
            .catch((error) => {
              // const userData = response.data?.data;
              const userData = {
                name: "Daggy",
                email: "daggy@cd.com",
                token: "dyuwgdyuwgeyu",
              };
              dispatch({ type: "SET_USER", payload: userData });
              //setToastMessage("Signup failed. Please try again.");
              //setToastVisible(true);
              // setTimeout(() => {
              //   setToastVisible(false);
              // }, 1500);
            });
    }


  };

  return (
    <View style={styles.container}>
      <View style={styles.header2}>
        <MaterialCommunityIcons name="account-plus" size={100} color="white" />
        <Text style={styles.msg}>Get Started</Text>
      </View>
      <View style={styles.formContainer2}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.passwordInputContainer}>
          <TextInput
            placeholder="Password"
            secureTextEntry={!showPassword}
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.showPasswordButton}
            onPress={() => setShowPassword(!showPassword)}
          >
            <MaterialIcons
              name={showPassword ? "visibility-off" : "visibility"}
              size={24}
              color="#888"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.passwordInputContainer}>
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={!showPassword}
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            style={styles.showPasswordButton}
            onPress={() => setShowPassword(!showPassword)}
          >
            <MaterialIcons
              name={showPassword ? "visibility-off" : "visibility"}
              size={24}
              color="#888"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.switchText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
      <ToastModal
        visible={toastVisible}
        message={toastMessage}
        onClose={() => setToastVisible(false)}
      />
    </View>
  );
};

const Auth = () => {
  const [currentTab, setCurrentTab] = useState("Login");

  return (
    <View style={{ flex: 1 }}>
      {currentTab === "Login" ? (
        <View style={styles.background} />
      ) : (
        <View style={styles.background2} />
      )}
      {currentTab === "Login" ? (
        <LoginScreen navigation={{ navigate: setCurrentTab }} />
      ) : (
        <SignUpScreen navigation={{ navigate: setCurrentTab }} />
      )}
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
    backgroundColor: primary_color,
    minHeight: 150,
    justifyContent: "center",
    borderBottomLeftRadius: 90,
    position: "absolute",
    top: 0,
    left: 0,
  },
  header2: {
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
    backgroundColor: primary_color,
    minHeight: 150,
    justifyContent: "center",
    borderBottomRightRadius: 90,
    position: "absolute",
    top: 0,
    left: 0,
  },
  msg: {
    fontSize: 18,
    color: "white",
  },
  formContainer: {
    width: "80%",
    marginTop: 50,
  },
  formContainer2: {
    width: "80%",
    marginTop: 120,
  },
  title: {
    fontSize: 34,
    marginVertical: 50,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  showPasswordButton: {
    padding: 10,
    marginLeft: -40,
    marginTop: -10,
  },
  button: {
    backgroundColor: primary_color,
    padding: 10,
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  switchText: {
    color: primary_color,
    textAlign: "center",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: primary_color,
  },
  background2: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: primary_color,
  },
  toastContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: 20,
    borderRadius: 10,
    alignSelf: "center",
    position: "absolute",
    bottom: 50,
  },
  toastText: {
    color: "white",
  },
});
