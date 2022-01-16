import React from 'react';
import {ScrollView, Text, TextInput, View, Alert} from 'react-native';
import moment from 'moment';

export default function Header() {
  return (
    <View
      style={{
        marginTop: 35,
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'flex-end',
      }}>
      <Text style={{flex: 1, color: '#fff', fontSize: 28, fontWeight: 'bold'}}>
        Yapılacaklar Listesi
      </Text>
      <Text
        style={{
          marginRight: 15,
          color: '#fff',
          fontSize: 14,
          fontWeight: 'bold',
          marginBottom: 5,
        }}>
        {moment().format('LL')}
      </Text>
    </View>
  );
}
