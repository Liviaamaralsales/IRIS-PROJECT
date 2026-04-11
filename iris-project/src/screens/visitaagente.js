import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function VisitaAgente() {
  const [tab, setTab] = useState('pending');
  const [visitas, setVisitas] = useState([
    { id: '1', local: 'Home', addr: 'Avenida Paulista, 26 - SP, Brazil', date: '02/28/2025', time: '11:30 AM', status: 'pending' },
    { id: '2', local: 'School', addr: 'Avenida Paulista, 200 - SP, Brazil', date: '02/27/2025', time: '09:30 AM', status: 'pending' },
    { id: '3', local: 'Home', addr: 'Avenida Paulista, 689 - SP, Brazil', date: '02/26/2025', time: '10:00 AM', status: 'pending' },
  ]);

  // FUNÇÃO PRA ACEITAR VISITA
  const handleAccept = (id) => {
    Alert.alert("Confirmar", "Deseja alocar esta visita para você?", [
      { text: "Cancelar", style: "cancel" },
      { 
        text: "Sim", 
        onPress: () => {
          setVisitas(prev => prev.map(v => v.id === id ? { ...v, status: 'my' } : v));
          setTab('my'); // Pula para a aba de "Minhas Visitas" para mostrar o resultado
        } 
      }
    ]);
  };

  // FILTRAGEM BASEADA NA ABA
  const listaFiltrada = visitas.filter(v => v.status === (tab === 'pending' ? 'pending' : 'my'));

  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.headerArea}>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => Alert.alert("Sair", "Deseja voltar para a Home?")}>
            <Ionicons name="arrow-back" size={28} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Visits</Text>
          <View style={{ width: 28 }} />
        </View>

        <View style={styles.tabWrapper}>
          <TouchableOpacity 
            style={[styles.tabBtn, tab === 'pending' && styles.tabActive]} 
            onPress={() => setTab('pending')}
          >
            <Text style={[styles.tabText, tab === 'pending' && styles.textActive]}>Pending</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tabBtn, tab === 'my' && styles.tabActive]} 
            onPress={() => setTab('my')}
          >
            <Text style={[styles.tabText, tab === 'my' && styles.textActive]}>My Visits</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* CONTEÚDO */}
      <View style={styles.whiteSheet}>
        <Text style={styles.listTitle}>
          {tab === 'pending' ? "Visits available" : "Allocated to me"}
        </Text>

        <FlatList
          data={listaFiltrada}
          keyExtractor={item => item.id}
          ListEmptyComponent={<Text style={{textAlign: 'center', marginTop: 20, color: '#888'}}>Nenhuma visita aqui.</Text>}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.card} 
              activeOpacity={0.8}
              onPress={() => tab === 'pending' && handleAccept(item.id)}
            >
              <View style={styles.cardOrange}>
                <View>
                  <Text style={styles.cardPlace}>{item.local}</Text>
                  <Text style={styles.cardAddress}>{item.addr}</Text>
                </View>
                <Ionicons name={tab === 'pending' ? "add-circle-outline" : "chevron-forward"} size={26} color="white" />
              </View>
              
              <View style={styles.cardFooter}>
                <View style={styles.footerItem}>
                  <Ionicons name="calendar-outline" size={14} color="#666" />
                  <Text style={styles.footerText}>{item.date}</Text>
                </View>
                <View style={styles.footerItem}>
                  <Ionicons name="time-outline" size={14} color="#666" />
                  <Text style={styles.footerText}>{item.time}</Text>
                </View>
                <View style={styles.footerItem}>
                  <View style={[styles.statusDot, { backgroundColor: tab === 'pending' ? '#FF751F' : '#4CAF50' }]} />
                  <Text style={styles.footerText}>{tab === 'pending' ? "Pending" : "Confirmed"}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFDE59' },
  headerArea: { paddingTop: 60, paddingHorizontal: 20, alignItems: 'center' },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: 25 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#FF751F' },
  tabWrapper: { flexDirection: 'row', backgroundColor: '#EAEAEA', borderRadius: 12, padding: 4, width: '95%' },
  tabBtn: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 10 },
  tabActive: { backgroundColor: 'white' },
  tabText: { color: '#888', fontWeight: '600' },
  textActive: { color: '#FF751F' },
  whiteSheet: { flex: 1, backgroundColor: 'white', marginTop: 25, borderTopLeftRadius: 40, borderTopRightRadius: 40, paddingHorizontal: 20, paddingTop: 30 },
  listTitle: { fontSize: 20, fontWeight: 'bold', color: '#FF751F', marginBottom: 20 },
  card: { marginBottom: 15, borderRadius: 15, overflow: 'hidden', elevation: 3, backgroundColor: 'white' },
  cardOrange: { backgroundColor: '#FF751F', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 },
  cardPlace: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  cardAddress: { color: 'white', fontSize: 12, opacity: 0.9 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', padding: 12, backgroundColor: '#F2F2F2' },
  footerItem: { flexDirection: 'row', alignItems: 'center' },
  footerText: { fontSize: 11, color: '#666', marginLeft: 4 },
  statusDot: { width: 8, height: 8, borderRadius: 4 }
});