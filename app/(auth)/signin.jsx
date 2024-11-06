import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../assets/logo.png";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { Link, router } from "expo-router";
import { signIn } from "../../lib/appwrite";
const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [submiting, setIsSubmiting] = useState(false);
  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill the field");
    }
    setIsSubmiting(true);
    try {
      console.log(form.email, "emails");
      const result = await signIn(form.email, form.password);

      router.replace("/home");
    } catch (error) {
      console.log(error, "signinError");
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmiting(false);
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "black",
        height: "100%",
      }}
    >
      <ScrollView>
        <View style={{ paddingLeft: 20, paddingRight: 20, marginTop: 100 }}>
          <Image source={Logo} resizeMode="contain" style={{ width: "40%" }} />
          <Text
            style={{
              color: "white",
              fontFamily: "Poppins-SemiBold",
              fontSize: 20,
            }}
          >
            Sign in
          </Text>
          <InputField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            fieldStyle={{ marginTop: 25, fontSize: 16 }}
            keyboardType="email-address"
            placeholder="Enter the Email"
            placeholderColor="#a0a0a0"
            textStyle={{ color: "white" }}
          />
          <InputField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            fieldStyle={{ marginTop: 25, fontSize: 16 }}
            placeholder="Enter the Password"
            placeholderColor="#a0a0a0"
            textStyle={{ color: "white" }}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 25,
          }}
        >
          <Button
            buttonStyle={{
              // height: 50,
              width: "88%",
              backgroundColor: "#FFA300",
            }}
            textStyle={{ fontSize: 16, fontWeight: "bold" }}
            buttonTitle="Sign in"
            handlePress={submit}
            // isLoading={submiting}
          />
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>
            Don't have an account ?
            <Link
              href="/signup"
              style={{ color: "#FFA300", fontFamily: "Poppins-SemiBold" }}
            >
              {" "}
              Sign up
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
