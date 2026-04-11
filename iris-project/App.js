// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View } from 'react-native';
// import Denuncia from './src/screens/denuncia'; 
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//       <Denuncia />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });






import React from 'react';
import { View, StyleSheet } from 'react-native';
import Mapa from './src/screens/mapa'; 
import MarcarVisita from './src/screens/marcarvisita'; 

export default function App() {
  return (
    <View style={styles.container}>
      <MarcarVisita /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import Mapa from './src/screens/mapa'; 

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Mapa />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });