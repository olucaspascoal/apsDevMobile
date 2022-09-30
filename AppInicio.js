import React from 'react';
import { StyleSheet, Text, ImageBackground, View } from 'react-native';

import backgorund from "./assets/bg.jpg";

export default function AppInicio() {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgorund} resizeMode="cover" style={styles.image}>
      <View style={styles.box}>
        <Text style={styles.inicio}> Bem-vindo! </Text>
        <Text style={styles.sobre}> 
          Aplicativo de exercício da disciplina de Desenvolvimento de Aplicações Móveis.
        </Text>
        <Text style={styles.alunos}> 
          {"\n"}
          Profº Marcelo Perantoni
          {"\n"} {"\n"}
          Alunos: Lucas Pascoal, Lucas Ferreira e Pedro Cruz
          {"\n"}
        </Text>
      </View>
    </ImageBackground>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end"
  },
  box : {   
    display: 'flex',
    flexDirection: "column",
    backgroundColor: 'rgba(52, 52, 52, 0.7)'
  },
  inicio: {
    color: "white",
    fontSize: 36,
    textAlign: "center",
    fontWeight: "bold",
  },
  sobre: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
  alunos: {
    textAlign: "center",
    color: "white",
  }
});