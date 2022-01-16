import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment';
import 'moment/locale/tr';

export default function TodoItem({id, data, deleteList}) {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 15,
        flexDirection: 'row',
        minHeight: 65,
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
          {data.text}
        </Text>
        <Text style={{fontSize: 12, color: '#999'}}>
          {moment(data.created_at).format('lll')}
        </Text>
      </View>
      <View style={{marginRight: 10}}>
        <TouchableOpacity
          onPress={() => {
            deleteList(id);
          }}>
          <Text style={{fontSize: 13, fontWeight: 'bold', color: '#900'}}>
            [Sil]
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
