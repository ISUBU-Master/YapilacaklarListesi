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
  TextInput,
} from 'react-native';
import Header from './Components/Header';
import TodoItem from './Components/TodoItem';
import ControlButton from './Components/ControlButton';

export default function App() {
  return (
    <ScrollView style={{backgroundColor: '#161e69'}}>
      <Header />
      {Array(10)
        .fill(null)
        .map(() => (
          <TodoItem />
        ))}

      <ControlButton />
    </ScrollView>
  );
}
