import React, { useEffect, useState } from "react";
import { Alert } from "react-native";

const useAppwrite = (getData) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getDatas = async () => {
    try {
      const videos = await getData();
      if (videos) {
        //   console.log(videos, "videos");
        setData(videos);
      } else {
        setData([]);
      }
    } catch (error) {
      console.log(error, "Error while get Data");
      Alert.alert(error, "Error while get Data");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getDatas();
  }, []);
  const refetch = () => getDatas();
  return { data, loading, refetch };
};

export default useAppwrite;
