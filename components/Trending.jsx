import { View, Text, FlatList } from "react-native";
import React from "react";

const Trending = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <Text
          style={{
            color: "white",
            marginLeft: 5,
            fontSize: 21,
          }}
        >
          {item.id}
        </Text>
      )}
      horizontal
    />
  );
};

export default Trending;
