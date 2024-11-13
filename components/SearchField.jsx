import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import icons from "../constants/icons";
import Button from "./Button";
const SearchField = ({
  title,
  value,
  handleChangeText,
  fieldStyle,
  placeholder,
  placeholderColor,
  textStyle = {},
}) => {
  const [showPassword, setShowPassword] = useState(false);
  //   console.log(!showPassword);
  return (
    <View
      style={{
        backgroundColor: "#1a1a1a",
        height: 60,
        marginTop: 10,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "#1a1a1a",
        justifyContent: title === "Password" ? "space-between" : "center",
        // alignItems: title === "Password" ? "center" : "flex-start",
        // flexDirection: title === "Password" ? "row" : "",
        paddingLeft: 8,
      }}
    >
      <TextInput
        // value={value}
        onChangeText={handleChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        style={{ ...textStyle }}
        // secureTextEntry={title === "Password" && !showPassword}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "flex-end",
          marginTop: -25,
          marginRight: 10,
        }}
      >
        <TouchableOpacity>
          <Image
            style={{ width: 25, height: 25 }}
            source={icons.search}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchField;
