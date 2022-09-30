import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
 
import perfil from './assets/perfil.png'
import oferta from './assets/oferta.png'

import pedido1 from './assets/pedido1.png'
import pedido2 from './assets/pedido2.png'

const AppHome = () => {

  const inputAccessoryViewID = 'uniqueID';
  const initialText = '';
  const [text, setText] = useState(initialText);

  return(
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image source={perfil} />
        <View>
          <Text> Entregar em: </Text>
          <Text style={styles.h2}> UniCarioca </Text>
        </View>
      </View>
      <TextInput
          style={{
            padding: 16,
            marginTop: 24,
            marginBottom: 24,
            borderRadius: 24,
            backgroundColor: '#FFF',
          }}
          inputAccessoryViewID={inputAccessoryViewID}
          onChangeText={setText}
          value={text}
          placeholder={'O que você deseja comer agora?'}
      />
      <View>
        <Text style={styles.h2}> Oferta do Dia </Text>
        <Image 
          source={oferta} 
          style={{
            width: 'auto',
            borderRadius: 24,
            marginBottom: 16
          }}
        /> 
      </View>
      <View>
        <Text style={styles.h2}> Mais Pedidos </Text>
        <View style={styles.boxPedido}>
          <Image source={pedido1}/>
          <Image source={pedido2}/>
        </View>
      </View>
    </View>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
  },
  h2: {
    fontSize: 24
  },
  boxPedido: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
});

export default AppHome;