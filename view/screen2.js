import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useRecoilState } from "recoil";
import { inputtextwallpaper } from "../atoms/wallpaperinput";

const Screen2 = ({ route }) => {
  const [searchvalue, setSearchValue] = useRecoilState(inputtextwallpaper);
  const { clickedImage } = route.params;
  const [imageData, setImageData] = useState();
  //console.log(imageData);
  useEffect(() => {
    setImageData(JSON.parse(clickedImage)?.cover_photo.urls.regular);
   // console.log(imageData);
  }, []);

  const shownextimage = async () => {
    const data = await fetch(
      `https://source.unsplash.com/900x1600/?${searchvalue}`
    );
    //console.log(data);
    setImageData(data.url);
  };

  return (
    <View style={styles.imagecontainer}>
      {/* <Text>{item.title}</Text> */}
      <Image source={{ uri: imageData }} style={styles.image} />
      <TouchableOpacity style={styles.nextbtn} onPress={shownextimage}>
        <Text style={styles.nextbtntxt}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  // creating stylesheet in const styles

  imagecontainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },

  image: {
    width: "100%",
    height: "100%",
  },
  nextbtn: {
    position: "absolute",
    bottom: 10,
    right: 80,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 10,
  },
  nextbtntxt: {
    color: "black",
    fontSize: 20,
    // fontWeight: 'bold',
  },
});

export default Screen2;
