import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, Button, ImageBackground, View, Alert, Navigate, BrowserRouter, Routes, Route } from 'react-native';
import backgorund from "./assets/bg.jpg";
import Login from "./src/pages/Login.js";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = ({ navigation }) => (
  <View style={styles.container}>
    <StatusBar style="auto" />
    <ImageBackground source={backgorund} resizeMode="cover" style={styles.image}>
      {/* <Text style={styles.text}>Inside</Text> */}
      <View style={styles.box}>
        <Text style={styles.inicio}> Bem-Vindo! </Text>
        <Text style={styles.sobre}> 
          Aplicativo de exercício da disciplina de Desenvolvimento de Aplicações Móveis.
        </Text>
        <Text style={styles.alunos}> 
          Profº Marcelo Perantoni ~{"\n"}
          Alunos: Lucas Pascoal, Lucas Ferreira e Pedro Cruz
        </Text>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Login}
              options={{ title: 'Welcome' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <Button style={styles.button}
          title="Começar!"
          onPress={() =>  Alert.alert('Comece aqui!')}
        />
      </View>
    </ImageBackground>
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