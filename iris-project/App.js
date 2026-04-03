import React from "react";
import { View, StyleSheet } from "react-native";

// Importando as duas telas (deixei o Login aqui caso você queira trocar depois)
// import Login from "./src/screens/Login";
import Cadastro from "./src/screens/Cadastro";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Alterado para renderizar a tela de Cadastro */}
      <Cadastro />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
