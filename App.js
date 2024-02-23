import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Movie from './src/components/Movie'
const avengerImg = require('./assets/avengers.jpg')
const ironmanimg = require('./assets/ironman.jpg')
const spidermanimg = require('./assets/spider-man.jpg')
const thorimg = require('./assets/thor_love_and_thunder_dc.jpg')
const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
     <Text style={styles.header}>Таньд санал болгох киноны жагсаалт</Text>
     <Text style={styles.type}>Адал явдалт</Text>
     <Movie img={avengerImg} ner="Avengers"/>
     <Movie img={ironmanimg}  ner="Iron man"/>
     <Movie img={spidermanimg} ner="Spider-Man"/>
     <Movie img={thorimg} ner="Thor Love And Thunder"/>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    // flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
    gap:12
    
  },
  header:{
   fontSize: 28,
   fontWeight: '600',
   textAlign:'center'
},
  type: {
    fontSize: 18,
    fontWeight: '500',
  }

})