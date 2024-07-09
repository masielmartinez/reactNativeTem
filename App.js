import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useState } from "react";

import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";

import * as ImagePicker from 'expo-image-picker';

const imageLink = require("./assets/bnme.jpg");

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={imageLink}
          selectedImage={selectedImage}  
        />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label = "Choose a photo" pressEffect={pickImageAsync}/>
        <Button label = "Use this photo"/>
      </View>
      <Text style={{ color: "#fff" }}>pee oopp bboop opp</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});

