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

// src/App.js
// import React from 'react';
// // import Perfil from './src/screens/Perfil';
// import Notificacoes from './src/screens/Notificacoes';
// import Home from './src/screens/Home';
import Load from './src/screens/Load';
export default function App() {
  
  return <Load />;
}
