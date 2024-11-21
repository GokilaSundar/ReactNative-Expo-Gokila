import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import icons from "../constants/icons";

const zoomIn = {
  0: {
    scale: 0.7,
  },
  1: {
    scale: 0.8,
  },
};
const zoomOut = {
  0: {
    scale: 1,
  },
  1: {
    scale: 0.6,
  },
};
const TrendingItem = ({ activeItem, item }) => {
  console.log(activeItem.$id === item.$id, "items");

  // console.log(activeItem.$id, "active", item.$id, "uiu", item);
  const [play, setPlay] = useState(false);
  return (
    <Animatable.View
      duration={600}
      animation={activeItem.$id === item.$id ? zoomIn : zoomOut}
    >
      {play ? (
        <Text style={{ color: "white" }}>Playing</Text>
      ) : (
        <TouchableOpacity
          style={{
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            margin: 0 - 10,
            // marginRight: 5,
          }}
          onPress={() => setPlay(true)}
          activeOpacity={0.6}
        >
          <ImageBackground
            source={{ uri: item.thumbnail }}
            resizeMode="cover"
            style={{
              // width: 200,
              height: 400,
              shadowColor: "black",
              aspectRatio: 16 / 20,
              borderRadius: 20,
              overflow: "hidden",
              margin: -28,
              borderWidth: 2,
              borderColor: "violet",
            }}
          />
          <Image
            source={icons.play}
            style={{ position: "absolute", width: 40, height: 40 }}
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const Trending = ({ posts }) => {
  // console.log(posts, "POOOOO");
  const [activeItem, setActiveItem] = useState(posts[2]);
  // console.log(activeItem, "accccc");
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      horizontal
    />
  );
};

export default Trending;
