import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Onboard from "../assets/Onboarding-img.png";
import Logo from "../assets/logo.png";
import Path from "../assets/images/path.png";
import Button from "../components/Button";
import { useGlobalContext } from "../context/GlobalProvider";
export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();
  console.log("isLoading", useGlobalContext());
  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;
  return (
    <SafeAreaView style={{ backgroundColor: "black", height: "100%" }}>
      <ScrollView contentContainerStyle={{ height: "100%", marginTop: -50 }}>
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={Logo}
            resizeMode="cover"
            style={{ width: "40%", height: "3.6%", marginTop: 30 }}
          />

          <Image
            source={Onboard}
            resizeMode="cover"
            style={{ maxWidth: 350, height: 300, width: 300, marginTop: 30 }}
          />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              marginTop: 15,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 25,
                fontFamily: "Poppins-SemiBold",
              }}
            >
              Discover With
              <Text style={{ color: "#FFA300" }}> Gokila : )</Text>
            </Text>
            <Image
              style={{
                position: "absolute",
                bottom: -1,
                right: 30,
                width: 80,
                height: 12,
              }}
              source={Path}
            />
          </View>

          <View style={{ marginTop: 25, width: "100%" }}>
            <Button
              buttonStyle={{
                // height: 40,
                backgroundColor: "#FFA300",
              }}
              textStyle={{ fontSize: 15, fontWeight: "bold" }}
              buttonTitle="Continue with Email"
              handlePress={() => {
                router.push("/signin");
              }}
            />
          </View>

          <StatusBar backgroundColor="#161622" style="light" />
        </View>
      </ScrollView>
    </SafeAreaView>
    // <View style={styles.container}>
    //   <Text style={{ fontFamily: "Poppins-Bold" }}>app</Text>
    //   <StatusBar style="auto" />
    //   <Link href="/profile">Move to Home</Link>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
