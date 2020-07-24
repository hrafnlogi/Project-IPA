import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';

import { StyleSheet, TouchableOpacity , Button, Alert} from 'react-native';


import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';



export default function EditScreenInfo({ path }: { path: string }) {

const [count, setCount] = useState(0);
const play = () => {
    
    setCount(prevCount => prevCount + 1)

};
const onPress = () => {
    
    setCount(prevCount => prevCount + 1)

};

  return (
    
    <View>
        <View style={styles.container}>
            
            <TouchableOpacity
                style={styles.button}
                onPress={play}
            >
                <Text style={styles.textColor}>Plays</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.textColor}>Options</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.textColor}>Placeholder</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.textColor}>Placeholder</Text>
            </TouchableOpacity>
            <View style={styles.countContainer}>
                <Text>Count: {count}</Text>
            </View>
        </View>
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    paddingHorizontal: 10,
    position: "relative",
    backgroundColor: '#d5d9fb',
    
  },
  button: {
    alignItems: "center",
    color: "#ff0000",
    backgroundColor: "#f28e1c",
    paddingHorizontal: 35,
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  textColor: {
      color: "white",
      fontWeight: "bold"
  }
});
