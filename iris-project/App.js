import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AlertasAgente } from './src/screens/marcarvisita'; 

export default function App() {
  return (
    <View style={styles.container}>
      <AlertasAgente /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
