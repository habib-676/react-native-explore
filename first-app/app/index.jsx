import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import IcedCoffee from "@/assets/images/iced-coffee.png";
import { Link } from "expo-router";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={IcedCoffee}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Coffee shop</Text>
        <Link style={{ marginHorizontal: "auto" }} href={"/contact"} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    marginBottom: 100,
  },
  linkText: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    textDecorationLine: "underline",
    padding: 4,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 4,
  },
  button: {
    height: 60,
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,.75)",
    padding: 6,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    flex: 1,
    justifyContent: "center",
  },
});
