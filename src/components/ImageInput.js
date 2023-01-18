import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TouchableOpacity,StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImageInput({src=null}) {
  const [image, setImage] = useState(src);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage({uri:result.assets[0].uri});
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={pickImage}>
        {!image && <Image source={require('../assets/dp.webp')} style={styles.container} />}
        {image && <Image source={image} style={styles.container}  />}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:110,
    height:110,
    margin:5,
    marginHorizontal:10,
    borderRadius:55,
  },
})
