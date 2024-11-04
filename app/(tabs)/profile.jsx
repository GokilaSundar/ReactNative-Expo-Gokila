import { StyleSheet, Text, View } from "react-native";
import React from "react";

const profile = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "blue" }}>profile</Text>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "blue",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
