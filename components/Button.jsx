import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({
  buttonTitle,
  handlePress,
  buttonStyle,
  textStyle,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={{
        // width: "60%",
        // height: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginTop: 15,
        marginLeft: 50,
        marginRight: 50,
        ...buttonStyle,
        opacity: isLoading ? 0.6 : 1,
      }}
      disabled={isLoading}
    >
      <Text style={{ ...textStyle }}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default Button;
