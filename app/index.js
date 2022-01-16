import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Header from './Components/Header';

export default function App() {
  return (
    <ScrollView style={{backgroundColor: '#161e69'}}>
      <Header />
    </ScrollView>
  );
}
