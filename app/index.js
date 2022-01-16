import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from './Components/Header';
import TodoItem from './Components/TodoItem';

export default function App() {
  return (
    <ScrollView style={{backgroundColor: '#161e69'}}>
      <Header />
      <TodoItem />
    </ScrollView>
  );
}
