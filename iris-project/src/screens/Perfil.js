import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView 
} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* CABEÇALHO AMARELO LIMPO */}
        <View style={styles.header}>
          {/* FOTO DE PERFIL MAIS APARENTE */}
          <View style={styles.profileContainer}>
            <View style={styles.avatarPlaceholder} />
            <TouchableOpacity style={styles.cameraIcon}>
              <Feather name="camera" size={18} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* FORMULÁRIO */}
        <View style={styles.content}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} placeholder="Your name" placeholderTextColor="#A1A1A1" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Your e-mail" 
              placeholderTextColor="#A1A1A1"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} secureTextEntry value="••••••" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone number</Text>
            <View style={styles.phoneRow}>
              <TouchableOpacity style={styles.countryPicker}>
                <Text style={styles.countryText}>+91 </Text>
                <Feather name="chevron-down" size={14} color="#666" />
              </TouchableOpacity>
              <TextInput 
                style={styles.phoneInput} 
                placeholder="680192039" 
                keyboardType="phone-pad"
              />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* BARRA DE NAVEGAÇÃO INFERIOR */}
      <View style={styles.tabBar}>
        <TouchableOpacity><Feather name="home" size={26} color="#F2994A" /></TouchableOpacity>
        <TouchableOpacity><Feather name="search" size={26} color="#F2994A" /></TouchableOpacity>
        
        <View style={styles.activeTabWrapper}>
          <View style={styles.activeTabCircle}>
            <Feather name="user" size={26} color="#FFF" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollContent: {
    paddingBottom: 120,
  },
  header: {
    backgroundColor: '#FDD835',
    height: 200, // Ajustei um pouco a altura já que não tem as bolinhas
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  profileContainer: {
    marginBottom: -60, 
    zIndex: 10,
    // Sombra para dar profundidade ao círculo de perfil
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  avatarPlaceholder: {
    width: 140, // Aumentei o tamanho
    height: 140,
    borderRadius: 70,
    backgroundColor: '#D1D1D1', // Cinza um pouco mais forte
    borderWidth: 6,
    borderColor: '#FFF',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  content: {
    marginTop: 80,
    paddingHorizontal: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
    color: '#000',
  },
  input: {
    backgroundColor: '#F2F2F2',
    height: 55,
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 15,
    color: '#333',
  },
  phoneRow: {
    flexDirection: 'row',
    backgroundColor: '#F2F2F2',
    height: 55,
    borderRadius: 25,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  countryPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#DDD',
    paddingRight: 10,
    marginRight: 15,
  },
  countryText: {
    color: '#666',
  },
  phoneInput: {
    flex: 1,
    fontSize: 15,
  },
  tabBar: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    height: 70,
    backgroundColor: '#FFF',
    borderRadius: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#F2994A',
    paddingHorizontal: 10,
  },
  activeTabWrapper: {
    marginTop: -40,
  },
  activeTabCircle: {
    backgroundColor: '#F2994A',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: '#FFF',
  },
});