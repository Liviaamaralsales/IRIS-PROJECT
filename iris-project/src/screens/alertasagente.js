import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons'; 

export default function AlertasAgente() {
  const [confirmado, setConfirmado] = useState(null);
  const [activeTab, setActiveTab] = useState('alerts'); // Alterado para alerts para teste

  const renderNavItem = (tabName, IconComponent, iconName, isLibIonicons = false) => {
    const isActive = activeTab === tabName;
    return (
      <View style={styles.itemWrapper}>
        {isActive && <View style={styles.activeDot} />}
        <TouchableOpacity
          onPress={() => setActiveTab(tabName)}
          activeOpacity={0.8}
          style={[
            styles.navItem,
            isActive ? styles.activeButtonCircle : null,
            isActive ? { backgroundColor: '#FF6B00' } : null
          ]}
        >
          {isLibIonicons ? (
            <Ionicons name={iconName} size={isActive ? 30 : 24} color={isActive ? "white" : "#888"} />
          ) : (
            <Feather name={iconName} size={isActive ? 26 : 24} color={isActive ? "white" : "#888"} />
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>IA Alert</Text>
      
      <ScrollView contentContainerStyle={[styles.content, { paddingBottom: 100 }]}>
        <View style={styles.card}>
          {/* <Image 
            source={require('../tire.png')} 
            style={styles.imageIA} 
          />  */}
          
          <View style={styles.row}>
            <Text style={styles.urgency}>High Urgency</Text>
            <Text style={styles.accuracy}>Accuracy - 98.4%</Text>
          </View>

          <Text style={[styles.label, { marginTop: 15 }]}>Location</Text>
          <View style={styles.locationRow}>
            <Text style={styles.address}>Av. Paulista, 26 - SP, Brazil</Text>
            <TouchableOpacity style={styles.mapBtn}><Text style={styles.mapText}>Map</Text></TouchableOpacity>
          </View>

          <View style={styles.descBox}>
            <Text style={styles.descTitle}>Description</Text>
            <Text>Foco detectado pela Unidade #042. Requer remoção mecânica.</Text>
          </View>

          <Text style={[styles.question, { marginTop: 25 }]}>A classificação está correta?</Text>
          <View style={styles.btnGroup}>
            <TouchableOpacity 
              style={[styles.choiceBtn, confirmado === true && {backgroundColor: '#FF751F'}]}
              onPress={() => setConfirmado(true)}
            >
              <Text style={confirmado === true && {color: 'white', fontWeight: 'bold'}}>Sim</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.choiceBtn, confirmado === false && {backgroundColor: '#FF751F'}]}
              onPress={() => setConfirmado(false)}
            >
              <Text style={confirmado === false && {color: 'white', fontWeight: 'bold'}}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* --- MENU COM 4 ITENS --- */}
      <View style={styles.navBarContainer}>
        <View style={styles.navBar}>
          {renderNavItem('home', Feather, 'home')}
          {renderNavItem('search', Ionicons, 'search', true)}
          {/* NOVO ITEM DE ALERTA ABAIXO */}
          {renderNavItem('alerts', Feather, 'alert-triangle')} 
          {renderNavItem('profile', Feather, 'user')}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFDE59', paddingTop: 50 },
  mainTitle: { textAlign: 'center', fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#FF751F' },
  content: { padding: 20 },
  card: { backgroundColor: 'white', borderRadius: 25, padding: 20, elevation: 5 },
  imageIA: { width: '100%', height: 220, borderRadius: 15 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 },
  urgency: { color: 'red', fontWeight: 'bold', fontSize: 16 },
  accuracy: { color: '#666', fontSize: 14 },
  label: { fontWeight: 'bold', color: '#333' },
  locationRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 },
  address: { color: '#555', flex: 1 },
  mapBtn: { backgroundColor: '#FF751F', padding: 8, borderRadius: 8, marginLeft: 10 },
  mapText: { color: 'white', fontWeight: 'bold', fontSize: 12 },
  descBox: { backgroundColor: '#FFF5E6', borderWidth: 1, borderColor: '#FFDE59', borderRadius: 10, padding: 12, marginTop: 20 },
  descTitle: { fontWeight: 'bold', marginBottom: 4 },
  question: { textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
  btnGroup: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 },
  choiceBtn: { paddingHorizontal: 40, paddingVertical: 12, borderRadius: 15, borderWidth: 1, borderColor: '#FF751F' },

  navBarContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    height: 90, 
    backgroundColor: 'white',
    justifyContent: 'center',
    zIndex: 999,
  },
  navBar: {
    width: '94%',
    height: 58,
    backgroundColor: 'white',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#FF6B00',
  },
  itemWrapper: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  navItem: { alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: 24 },
  activeButtonCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: -40, 
    borderWidth: 5,
    borderColor: 'white', 
    elevation: 8,
  },
  activeDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#FF6B00',
    position: 'absolute',
    top: -48, 
  }
});