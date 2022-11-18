import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppList from './AppList';
import AppHome from './AppHome';
import AppInicio from './AppInicio';
 
const { Navigator, Screen } = createBottomTabNavigator();
 
function AppTab() {
    return (
        <NavigationContainer>
            <Navigator
              screenOptions={{
                tabBarActiveTintColor: "#FF611D",
                tabBarInactiveTintColor: "#c1bccc",
                tabBarActiveBackgroundColor: "#ebebf5",
                tabBarInactiveBackgroundColor: "#fafafc",
              }}
            >
              <Screen 
                name="Bem-Vindo!"
                component={AppInicio}
                options={{
                  tabBarLabel: 'Bem-vindo',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="check" color={color} size={size} />
                  ),
                }}
              />
                <Screen 
                  name="Endereços" 
                  component={AppList} 
                  options={{
                    tabBarLabel: 'Endereços',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="map-marker" color={color} size={size} />
                    ),
                  }}
                />
                <Screen 
                  name="Início" 
                  component={AppHome} 
                  options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                  }}
                />
            </Navigator>
        </NavigationContainer>
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
  },
  button: {
    backgroundColor: "#FF611D",
  }
});


export default AppTab;