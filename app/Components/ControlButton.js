import React from 'react';
import {Text, TouchableOpacity, View, TextInput} from 'react-native';

export default function ControlButton() {
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
          placeholder="Yapılacak birşeyler yaz!"
          style={{
            marginHorizontal: 5,
            borderColor: 'red',
            fontSize: 15,
          }}
        />
      </View>
      <TouchableOpacity
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
