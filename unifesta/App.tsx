import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Cr>aa</Cr>
      <StatusBar style="auto" />
    </View>
  );
}

const Cr = styled.Text`
  color: red;
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
