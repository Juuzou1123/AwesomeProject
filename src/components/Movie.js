import { Image, StyleSheet, Text, View } from "react-native";
import React from "react"
const Movie = ({ img, ner, desc }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={img}   />
      <Text style={styles.garchig}> {ner} </Text>
      <Text style={styles.descreption}> {desc}
        Avengers: Endgame is a 2019 American superhero film based on the Marvel
        Comics superhero team the Avengers.
      </Text>
      
    </View>
    
  );
  
};

export default Movie;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 350,
    borderWidth: 1,
  },
  img: {
    width: 300,
    height: 400,
  },
  garchig: {
   fontSize: 24,
    fontWeight: 'bold'
  },
  descreption: {
   fontSize: 16,
   fontWeight: '300'

  }
});
