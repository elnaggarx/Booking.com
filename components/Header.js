import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#003580",
        height: 65,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderColor: "white",
          borderWidth: 1,
          borderRadius: 25,
          padding: 8,
        }}
      >
        <Ionicons name="bed-outline" size={24} color="white" />
        <Text
          style={{
            color: "white",
            marginLeft: 8,
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          Stays
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="airplane-outline" size={24} color="white" />
        <Text
          style={{
            color: "white",
            marginLeft: 8,
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          Flights
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="car-outline" size={24} color="white" />
        <Text
          style={{
            color: "white",
            marginLeft: 8,
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          Car Rental
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      <FontAwesome5 name="uber" size={24} color="white" />
        <Text
          style={{
            color: "white",
            marginLeft: 8,
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          Taxi
        </Text>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
