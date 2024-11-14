import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import image from "../../constants/images";
import SearchField from "../../components/SearchField";
import Trending from "../../components/Trending";
import EmptyPage from "../../components/EmptyPage";
import { getAllPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";
const Home = () => {
  const [refresh, setRefreah] = useState(false);
  const { data: videos, loading, refetch } = useAppwrite(getAllPosts);
  const handleRefresh = async () => {
    setRefreah(true);
    await refetch();
    setRefreah(false);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "black", height: "100%" }}>
      <FlatList
        data={videos}
        // data={[]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={
          <View
            style={{
              // backgroundColor: "black",
              marginTop: 40,
              marginBottom: 20,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <View
              style={{
                // backgroundColor: "black",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexDirection: "row",
              }}
            >
              <View style={{ marginTop: 10 }}>
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Poppins-Medium",
                    fontSize: 20,
                  }}
                >
                  Welcome Back
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 22,
                    fontFamily: "Poppins-SemiBold",
                  }}
                >
                  GVS
                </Text>
              </View>
              <View style={{}}>
                <Image
                  source={image.logoSmall}
                  resizeMode="contain"
                  style={{ width: 50, height: 50, marginBottom: 20 }}
                />
              </View>
            </View>
            <SearchField
              placeholder="Search for a video topics"
              placeholderColor="#a0a0a0"
              textStyle={{ color: "white", fontSize: 16 }}
            />
            <View style={{ marginTop: 20 }}>
              <Text
                style={{
                  color: "white",
                  fontFamily: "Poppins-Regular",
                  fontSize: 16,
                }}
              >
                Trending Videos
              </Text>
              <Trending
                posts={
                  [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }] ?? []
                }
              />
            </View>
          </View>
        }
        ListEmptyComponent={() => (
          <EmptyPage
            title="No videos found"
            subTitle="Create the trending videos"
          />
        )}
        refreshControl={
          <RefreshControl refresh={refresh} onRefresh={handleRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
