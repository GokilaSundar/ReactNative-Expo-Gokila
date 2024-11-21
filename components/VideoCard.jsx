import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import icons from "../constants/icons";
const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    creator: { userName, avatar },
  },
}) => {
  const [play, setPlay] = useState(false);
  return (
    <View
      style={{
        padding: 15,
        // backgroundColor: "red",
      }}
    >
      <View
        style={{
          flexDirection: "col",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 5,
          // backgroundColor: "yellow",
          // padding: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderWidth: 2,
              borderColor: "#FFA300",
              borderRadius: 10,
              width: 50,
              height: 50,
              margin: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: avatar }}
              resizeMode="cover"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 8,
              }}
            />
          </View>
          <View
            style={{
              // backgroundColor: "black",
              flex: 1,
              flexDirection: "row",
              // padding: 5,
              justifyContent: "space-between",
              // alignItems: "flex-start",
            }}
          >
            <View
              style={{
                // backgroundColor: "blue",
                paddingRight: 20,
              }}
            >
              <View>
                <Text
                  numberOfLines={1}
                  style={{
                    color: "white",
                    marginLeft: 5,
                    fontSize: 20,
                  }}
                >
                  {title}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "white",
                    marginLeft: 5,
                    fontSize: 15,
                  }}
                >
                  {userName}
                </Text>
              </View>
            </View>
            <View style={{}}>
              <Image
                source={icons.menus}
                resizeMode="cover"
                style={{
                  width: 6,
                  height: 30,
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{ margin: 2, justifyContent: "center", alignItems: "center" }}
        >
          {play ? (
            <Text
              style={{
                color: "white",
              }}
            >
              Playing
            </Text>
          ) : (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setPlay(true)}
              style={{
                width: "100%",
                height: 205,
                aspectRatio: 18 / 11,
                marginTop: 10,
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: thumbnail }}
                resizeMode="cover"
                style={{
                  width: "100%",
                  height: "100%",
                  borderWidth: 2,
                  borderColor: "skyblue",
                  borderRadius: 20,
                }}
              />
              <Image
                source={icons.play}
                style={{ position: "absolute", width: 35, height: 35 }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default VideoCard;
