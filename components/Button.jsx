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
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        height: 50,
        // marginTop: 15,
        marginLeft: 20,
        marginRight: 20,
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
