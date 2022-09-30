import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, Button, ImageBackground, View, Alert, Navigate, BrowserRouter, Routes, Route } from 'react-native';
import backgorund from "./assets/bg.jpg";
import Login from "./src/pages/Login.js";

import AppTab from './AppTab';


const App = () => (
  <View style={styles.container}>
    <AppTab />
  </View>
);

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
  },
  button: {
    backgroundColor: "#FF611D",
  }
});

App.navigationOptions = {
  title: 'Home',
}

export default App;