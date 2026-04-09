import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function YesNoAgente() {
  const info = {
    name: "Mary Smith",
    type: "Home",
    address: "Avenida Paulista, 26 - SP, Brazil",
    date: "02/28/2025",
    time: "11:30 AM",
    reason: "I am requesting a visit from an endemic disease control agent due to the large number of mosquitoes in the area. Although the swimming pool is rarely used, there is concern about possible mosquito breeding, which may pose health risks."
  };

  const InfoRow = ({ label, value }) => (
    <View style={styles.infoRow}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
      <View style={styles.divider} />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Background decorado */}
      <View style={styles.yellowDecoration}>
         <TouchableOpacity style={styles.backBtn}>
            <Ionicons name="arrow-back" size={32} color="black" />
          </TouchableOpacity>
          {/* Círculos decorativos brancos */}
          <View style={[styles.circle, { top: 20, right: 20, opacity: 0.6 }]} />
          <View style={[styles.circle, { top: 80, left: -30, width: 120, height: 120, opacity: 0.4 }]} />
          <View style={[styles.circle, { top: -20, left: 150, opacity: 0.5 }]} />
      </View>

      <View style={styles.whiteCard}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Information</Text>

          <InfoRow label="Name" value={info.name} />
          <InfoRow label="Type" value={info.type} />
          <InfoRow label="Adress" value={info.address} />
          <InfoRow label="Date" value={info.date} />
          <InfoRow label="Time" value={info.time} />

          <View style={styles.infoRow}>
            <Text style={styles.label}>Reason for visit</Text>
            <Text style={styles.reasonText}>{info.reason}</Text>
            <View style={styles.divider} />
          </View>

          <Text style={[styles.label, { marginTop: 10 }]}>Status</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.btn, styles.btnYes]} onPress={() => Alert.alert("Sucesso", "Visita alocada!")}>
              <Text style={styles.btnText}>Yes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btn, styles.btnNo]}>
              <Text style={styles.btnText}>No</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFDE59' },
  yellowDecoration: { height: 220, overflow: 'hidden' },
  backBtn: { marginTop: 50, marginLeft: 20, zIndex: 10 },
  circle: { position: 'absolute', backgroundColor: 'white', width: 90, height: 90, borderRadius: 60 },
  
  whiteCard: { 
    flex: 1, 
    backgroundColor: 'white', 
    marginTop: -50, 
    borderTopLeftRadius: 40, 
    borderTopRightRadius: 40, 
    padding: 30 
  },
  title: { fontSize: 28, fontWeight: 'bold', color: '#FF751F', marginBottom: 30 },
  
  infoRow: { marginBottom: 15 },
  label: { fontSize: 16, fontWeight: 'bold', color: '#FF751F', marginBottom: 4 },
  value: { fontSize: 15, color: '#333' },
  reasonText: { fontSize: 14, color: '#555', lineHeight: 20 },
  divider: { height: 1.5, backgroundColor: '#FF751F', marginTop: 10, opacity: 0.3 },

  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 25, paddingBottom: 30 },
  btn: { width: '45%', height: 45, borderRadius: 25, justifyContent: 'center', alignItems: 'center', elevation: 2 },
  btnYes: { backgroundColor: '#58D32E' },
  btnNo: { backgroundColor: '#F94144' },
  btnText: { color: 'white', fontWeight: 'bold', fontSize: 18 }
});