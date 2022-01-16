import React from 'react';
import {ScrollView, Text, TextInput, View, Alert} from 'react-native';
import moment from 'moment';

export default function StatusBar({data}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        marginTop: 8,
        marginHorizontal: 15,
      }}>
      <Text style={{flex: 1, color: '#FFF', fontSize: 15, textAlign: 'center'}}>
        Yapılacak: {data.filter(_ => _.isDone === false).length}
      </Text>
      <Text style={{flex: 1, color: '#FFF', fontSize: 15, textAlign: 'center'}}>
        Yapılan: {data.filter(_ => _.isDone === true).length}
      </Text>
      <Text style={{flex: 1, color: '#FFF', fontSize: 15, textAlign: 'center'}}>
        Toplam: {data.length}
      </Text>
      <Text
        onPress={() => {
          Alert.alert(
            'Yapılacaklar Listesi',
            'Bu uygulama ISUBU, Mobil Programlamada İleri Uygulamalar dersi final ödevi için hazırlanmıştır.',
            [
              {
                text: 'Tamam',
                style: 'cancel',
              },
            ],
          );
        }}
        style={{flex: 1, color: '#FFF', fontSize: 15, textAlign: 'center'}}>
        Bilgi
      </Text>
    </View>
  );
}
