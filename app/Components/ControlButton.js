import React, {useState} from 'react';
import {Text, TouchableOpacity, View, TextInput, Keyboard} from 'react-native';

export default function ControlButton({addTodoList}) {
  const [value, setValue] = useState('');
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 1,
          marginRight: 15,
          borderRadius: 15,
          backgroundColor: '#fff',
        }}>
        <TextInput
          multiline
          onChangeText={text => {
            setValue(text);
          }}
          value={value}
          placeholder="Yapılacak birşeyler yaz!"
          style={{
            marginHorizontal: 5,
            borderColor: 'red',
            fontSize: 15,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          addTodoList(value);
          setValue('');
          Keyboard.dismiss();
        }}
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: '#FFF',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: '#000',
            marginTop: -4,
          }}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
}
