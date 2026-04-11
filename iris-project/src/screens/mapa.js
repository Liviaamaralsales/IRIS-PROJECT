import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons'; 
import Menu from '../components/menu';

export default function Mapa() {
  const mapRef = useRef(null);
  const [region, setRegion] = useState({
    latitude: -23.5612,
    longitude: -46.6559,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const handleSearch = () => {
    const newLocation = {
      latitude: -23.5895, 
      longitude: -46.6576,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
    setRegion(newLocation);
    mapRef.current?.animateToRegion(newLocation, 1000);
  };

  return (
    <View style={styles.container}>
      <MapView 
        ref={mapRef}
        style={styles.map}
        initialRegion={region}
      >
        <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
      </MapView>

      <View style={styles.searchContainer}>
        <Ionicons name="location" size={20} color="#000" />
        <TextInput 
          style={styles.searchInput} 
          placeholder="Avenida Paulista, 26 - SP, Brazil"
        />
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={20} color="#FF751F" />
        </TouchableOpacity>
      </View>

      <View style={styles.infoCard}>
        <View style={styles.indicatorContainer}>
          <View style={[styles.dot, {backgroundColor: '#FF6B00'}]} />
          <View style={[styles.dot, {width: 6, height: 6}]} />
          <View style={[styles.dot, {width: 6, height: 6}]} />
          <View style={[styles.dot, {width: 6, height: 6}]} />
        </View>

        <View style={styles.riskContainer}>
          <View style={styles.riskItem}>
            <Ionicons name="location" size={30} color="#FF3131" />
            <Text style={styles.riskText}>Serious Risk</Text>
          </View>
          <View style={styles.riskItem}>
            <Ionicons name="location" size={30} color="#00BF63" />
            <Text style={styles.riskText}>Moderate Risk</Text>
          </View>
          <View style={styles.riskItem}>
            <Ionicons name="location" size={30} color="#FFDE59" />
            <Text style={styles.riskText}>Low Risk</Text>
          </View>
        </View>

        <View style={styles.locationYellowCard}>
           <Ionicons name="location-sharp" size={40} color="#3d0101" />
           <View style={{marginLeft: 10}}>
              <Text style={{fontWeight: 'bold', color: '#B8860B'}}>Your location:</Text>
              <Text style={{color: 'white', fontWeight: '500'}}>Avenida Paulista, 26 - SP, Brazil</Text>
           </View>
        </View>
      </View>

      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  map: { ...StyleSheet.absoluteFillObject },
  searchContainer: {
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFDE59',
    elevation: 4,
  },
  searchInput: { marginLeft: 10, flex: 1, fontSize: 13 },
  infoCard: {
    position: 'absolute',
    bottom: 90,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 20,
    elevation: 10,
  },
  indicatorContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 20, alignItems: 'center' },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#DDD', marginHorizontal: 4 },
  riskContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  riskItem: { alignItems: 'center' },
  riskText: { fontSize: 13, marginTop: 5, fontWeight: '500', color: '#333' },
  locationYellowCard: {
    backgroundColor: '#FFDE59',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  }
});