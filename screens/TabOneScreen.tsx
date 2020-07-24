import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import PlayButton from '../components/PlayButton';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>IPA</Text>
      <PlayButton path="/screens/TabOneScreen.tsx" />
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: "relative",
    backgroundColor: '#e8eafd'
  },
  title: {
    paddingTop: 60,
    fontSize: 50,
    fontWeight: 'bold',
    position: "relative"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
