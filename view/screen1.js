import React, { useEffect, useState } from 'react'
import { Image, View ,StyleSheet} from 'react-native'
import { Text } from 'react-native'
import { useRecoilState } from 'recoil'
import {inputtextwallpaper} from '../atoms/wallpaperinput'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native'
import Navbar from './navbar'

function Sscreen1({navigation}) {

  const [searchvalue, setSearchValue] = useRecoilState(inputtextwallpaper)
  const [imageCollection,setimageCollection]=useState([])

  const accesKey="dpNTjCinD22_5rkhXuu_dl0yj3G1hOlZ2Vx0SKkD3XM"
  
useEffect(() => {
    const getimagecollection = async () => {
      let data = await fetch(`https://api.unsplash.com/search/collections?page=1&per_page=30&query=${searchvalue}&client_id=${accesKey}`)
      let json= await data.json()
      setimageCollection(json)
    //  console.log(json);
    }
    getimagecollection();
    //console.log("dshbghb");
},[searchvalue])

  imageCollection.total == 0 && setSearchValue('all')
  

  const showWallpaper = (item) => {
    //console.log(item)
   navigation.navigate('S2' ,{clickedImage: `${JSON.stringify(item)}`})
  }


  return (
  <View style={styles.container}>

<Navbar />
<FlatList numColumns={2}
      data={imageCollection.results}
      renderItem={({ item }) => 
      
     
      <TouchableOpacity onPress={()=> showWallpaper(item)} >
      <View style={styles.imagecontainer}>
          {/* <Text>{item.title}</Text> */}
          <Image source={{ uri: item.cover_photo.urls.regular }} style={styles.image} />
      </View>
  </TouchableOpacity>
      }
    />

  </View>
  
  )
}
const styles = StyleSheet.create({
  container: {
      width: "100%",
      height: "100%",
      // backgroundColor: "yellow",
      alignItems: 'center',
      // justifyContent: 'center',
      marginTop: 20,
      
  },
  imagecontainer: {
      width: 200,
      height: 200,
      backgroundColor: 'white',
  },
  image: {
      width: "100%",
      height: "100%",
  }
});

export default Sscreen1
