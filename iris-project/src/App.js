import React from 'react';
import { View, StyleSheet } from 'react-native';

// O caminho correto quando o App.js já está na pasta src:
import AlertasAgente from './screens/alertasagente';
import VisitaAgente from './screens/visitaagente';

export default function App() {
  return (
    <View style={styles.container}>
      <AlertasAgente /> 
      {/* <VisitaAgente /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});