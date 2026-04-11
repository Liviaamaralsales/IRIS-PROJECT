import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";

const Cadastro = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Topo Apenas com Cor Sólida (Sem Imagem) */}
      <View style={styles.headerBackground}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
      </View>

      {/* Formulário de Cadastro */}
      <View style={styles.formContainer}>
        <View style={styles.headerTextWrapper}>
          <Text style={styles.title}>Create new Account</Text>
          <TouchableOpacity>
            <Text style={styles.subtitle}>
              Already Registered? Log in here.
            </Text>
          </TouchableOpacity>
        </View>

        {/* Campo NAME */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>NAME</Text>
          <TextInput
            style={styles.input}
            placeholder="Your name"
            placeholderTextColor="#C7C7CD"
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* Campo EMAIL */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>EMAIL</Text>
          <TextInput
            style={styles.input}
            placeholder="Your email"
            placeholderTextColor="#C7C7CD"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Campo PASSWORD */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>PASSWORD</Text>
          <TextInput
            style={styles.input}
            placeholder="•••••"
            placeholderTextColor="#C7C7CD"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Campo DATE OF BIRTH */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>DATE OF BIRTH</Text>
          <TextInput
            style={styles.input}
            placeholder="Your date of birth (DD/MM/YYYY)"
            placeholderTextColor="#C7C7CD"
            value={dob}
            onChangeText={setDob}
          />
        </View>

        <TouchableOpacity style={styles.signUpButton} activeOpacity={0.7}>
          <Text style={styles.signUpButtonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headerBackground: {
    height: "25%",
    backgroundColor: "#FFDE59", // Apenas a cor amarela
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  backButton: {
    marginTop: 20,
    marginLeft: 25,
  },
  backArrow: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#000",
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: "center", // Centraliza os campos na tela
    alignItems: "center",
  },
  headerTextWrapper: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FF7020",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 13,
    color: "#FF7020",
    fontWeight: "500",
  },
  inputWrapper: {
    width: "100%",
    marginBottom: 12,
  },
  label: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#444",
    marginBottom: 5,
    marginLeft: 5,
  },
  input: {
    backgroundColor: "#F2F2F2",
    height: 48,
    borderRadius: 15,
    paddingHorizontal: 20,
    fontSize: 15,
    color: "#333",
  },
  signUpButton: {
    backgroundColor: "#FFDE59",
    width: "100%",
    height: 55,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  signUpButtonText: {
    color: "#FF7020",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Cadastro;
