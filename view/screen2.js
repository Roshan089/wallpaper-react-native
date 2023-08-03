import React, { useEffect, useState } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { useRecoilState } from 'recoil'

const Screen2 = ({route}) => {
  const { clickedImage} = route.params
  const [imageData, setImageData]=useState()
//console.log(imageData);
  useEffect(()=>{
    setImageData(JSON.parse(clickedImage))
  },[])
  return (
    <View style={styles.imagecontainer}>
    {/* <Text>{item.title}</Text> */}
   {typeof(imageData)=='object'&& <Image source={{ uri: imageData.cover_photo.urls.regular }} style={styles.image} />}
</View>
  )
}
const styles = StyleSheet.create({
 
      
  
  imagecontainer: {
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
  },
  
  image: {
      width: "100%",
      height: "100%",
  }
});

export default Screen2
