import * as React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Alert,
} from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';


const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Image 
        style={{width: 100, height: 80}} 
        source={{uri: 'https://media3.giphy.com/media/wWue0rCDOphOE/giphy.gif'}} 
      />
    </View>
  );
};


export default HomeScreen;
