import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment';
import 'moment/locale/tr';

export default function TodoItem({id, data, deleteList, doneToggle}) {
  return (
    <View
      style={[
        {
          backgroundColor: '#fff',
          margin: 10,
          borderRadius: 15,
          flexDirection: 'row',
          minHeight: 65,
          alignItems: 'center',
        },
        data.isDone ? {opacity: 0.7} : {},
      ]}>
      <View style={{marginLeft: 10}}>
        <TouchableOpacity
          onPress={() => {
            doneToggle(id);
          }}
          style={{
            width: 25,
            height: 25,
            borderRadius: 25 / 2,
            borderWidth: 3,
            borderColor: '#161e69',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {data.isDone ? (
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 12 / 2,
                backgroundColor: '#161e69',
              }}
            />
          ) : null}
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, marginLeft: 10, marginRight: 8}}>
        <Text
          style={{
            fontSize: 15,
            color: '#000',
            fontWeight: '600',
          }}>
          {data.isDone ? 'Yapıldı: ' : ''}
          <Text
            style={[
              data.isDone
                ? {
                    fontStyle: 'italic',
                    textDecorationLine: 'line-through',
                    color: '#666',
                  }
                : {},
            ]}>
            {data.text}
          </Text>
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
