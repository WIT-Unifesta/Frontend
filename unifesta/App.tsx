import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import styled from 'styled-components/native'
import { createStackNavigator } from '@react-navigation/stack'; 
import SchoolDetail from './SchoolDetail';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SchoolDetail" component={SchoolDetail} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const Cr = styled.Text`
  color: red;
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal:20,
  },
  header:{
    justifyContent:"space-between",
    flexDirection:"row",
    marginTop:100,
  },
  btnText:{
    fontSize:44,
    fontWeight:"600",
    color:"white",
  },
});
