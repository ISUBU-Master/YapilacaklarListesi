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
    <View style={{backgroundColor: '#161e69', flex: 1}}>
      <Header />
      <ScrollView>
        {Array(10)
          .fill(null)
          .map(() => (
            <TodoItem />
          ))}
      </ScrollView>
      <ControlButton />
    </View>
  );
}
