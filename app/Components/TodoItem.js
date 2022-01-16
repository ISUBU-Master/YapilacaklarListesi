import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default function TodoItem() {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 15,
        flexDirection: 'row',
        minHeight: 90,
        alignItems: 'center',
      }}>
      <View style={{marginLeft: 10}}>
        <TouchableOpacity
          style={{
            width: 25,
            height: 25,
            borderRadius: 25 / 2,
            borderWidth: 3,
            borderColor: '#161e69',
          }}>
          <View />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, marginLeft: 10, marginRight: 8}}>
        <Text style={{fontSize: 15, color: '#000', fontWeight: '600'}}>
          Lorem ipsum dolar sit amet lorem ipsum dolar sit ametamet lorem ipsum
          dolar sit amet
        </Text>
      </View>
      <View style={{marginRight: 10}}>
        <TouchableOpacity>
          <Text style={{fontSize: 13, fontWeight: 'bold', color: '#900'}}>
            [Tamamla]
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}