import { View, Text } from "react-native";
import React from "react";

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    creator: { userName, avatar },
  },
}) => {
  console.log(title);
  return (
    <View style={{}}>
      <View></View>
      <Text
        style={{
          color: "white",
          marginLeft: 5,
          fontSize: 21,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default VideoCard;
