import { View, Text, Image } from "react-native";
import React from "react";
import image from "../constants/images";
import Button from "./Button";
import { router } from "expo-router";
const EmptyPage = ({ title, subTitle }) => {
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}
    >
      <Image
        source={image.empty}
        resizeMode="contain"
        style={{ width: 250, height: 250, marginBottom: -30 }}
      />
      <Text
        style={{
          color: "white",
          fontFamily: "Poppins-SemiBold",
          fontSize: 23,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 16,
          fontFamily: "Poppins-Regular",
        }}
      >
        {subTitle}
      </Text>
      <Button
        buttonTitle="Create Videos"
        handlePress={() => router.push("/create")}
        buttonStyle={{
          backgroundColor: "#FFA300",
          width: 320,
          marginTop: 40,
          marginBottom: 40,
        }}
        textStyle={{ fontSize: 15, fontWeight: "bold" }}
      />
    </View>
  );
};

export default EmptyPage;
