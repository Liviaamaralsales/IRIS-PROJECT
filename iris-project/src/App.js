import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AlertasAgente } from '../iris-project/src/screens/alertasagente';
import { VisitaAgente } from '../iris-project/src/screens/visitaagente';

function App() {
  return (
  <View style={styles.container}>
    {/* Para ver a tela de Visitas, é só comentar a de Alertas e tirar o comentário da de Visita */}
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

export default App;