import React, {useState} from 'react';
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
  const [todoList, setTodoList] = useState([]);

  return (
    <View style={{backgroundColor: '#161e69', flex: 1}}>
      <Header />
      <ScrollView style={{flex: 1}}>
        {todoList.map(item => (
          <TodoItem data={item} />
        ))}
      </ScrollView>
      <ControlButton
        addTodoList={data => {
          setTodoList(d => [...d, data]);
        }}
      />
    </View>
  );
}
